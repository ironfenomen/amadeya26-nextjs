import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const TELEGRAM_API = "https://api.telegram.org";

type LeadBody = {
  name?: string;
  phone?: string;
  comment?: string;
  source?: string;
  pageUrl?: string;
  honeypot?: string;
  utm?: Record<string, string> | null;
  [key: string]: unknown;
};

async function sendTelegram(text: string): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return { ok: false, error: "MISSING_ENV" };
  try {
    const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("[lead] telegram http", res.status, detail.slice(0, 300));
      return { ok: false, error: `TELEGRAM_HTTP_${res.status}` };
    }
    return { ok: true };
  } catch (error) {
    console.error("[lead] telegram exception", error);
    return { ok: false, error: "NETWORK_ERROR" };
  }
}

function buildMessage(body: LeadBody, pageUrl: string): string {
  const name = String(body.name ?? "").trim() || "—";
  const phone = String(body.phone ?? "").trim() || "—";
  const source = String(body.source ?? "").trim();
  const comment = String(body.comment ?? "").trim();
  const utm = body.utm && typeof body.utm === "object" ? body.utm : {};
  const dateTime = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    dateStyle: "short",
    timeStyle: "short",
  });

  const lines = [
    "🔥 Новая заявка с сайта Амадея",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
  ];
  if (source) lines.push(`Форма: ${source}`);
  if (pageUrl) lines.push(`Страница: ${pageUrl}`);
  if (comment) lines.push(`Комментарий: ${comment}`);
  const utmStr = Object.entries(utm)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");
  if (utmStr) lines.push(`UTM: ${utmStr}`);
  lines.push(`Дата: ${dateTime}`);
  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadBody;

    // honeypot — молча принимаем, ничего не шлём
    if (body.honeypot && String(body.honeypot).trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const phone = String(body.phone ?? "").trim();
    if (!phone) {
      return NextResponse.json(
        { ok: false, error: "PHONE_REQUIRED" },
        { status: 400 },
      );
    }

    const pageUrl =
      String(body.pageUrl ?? "").trim() ||
      req.headers.get("referer") ||
      "";

    const result = await sendTelegram(buildMessage(body, pageUrl));
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] error", error);
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR" },
      { status: 500 },
    );
  }
}
