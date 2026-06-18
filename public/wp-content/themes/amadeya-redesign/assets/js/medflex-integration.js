/**
 * Интеграция с MedFlex для онлайн записи
 */

(function() {
    'use strict';

    // Инициализация интеграции с MedFlex
    function initMedFlexIntegration() {
        // Ждем загрузки скрипта MedFlex
        const checkMedFlex = setInterval(() => {
            if (window.MedFlexWidget || document.querySelector('#medflexRoundWidgetData')) {
                clearInterval(checkMedFlex);
                setupBookingButton();
            }
        }, 100);

        // Таймаут на случай, если скрипт не загрузится
        setTimeout(() => {
            clearInterval(checkMedFlex);
            setupFallbackBooking();
        }, 5000);
    }

    // Настройка кнопок записи
    function setupBookingButton() {
        // Кнопка на главной странице
        const bookingButton = document.getElementById('medflex-booking-trigger');
        if (bookingButton) {
            bookingButton.addEventListener('click', openMedFlexBooking);
        }

        // Кнопки MedFlex на страницах услуг (вторая кнопка)
        const serviceBookingButtons = document.querySelectorAll('.booking-medflex');
        serviceBookingButtons.forEach(button => {
            button.addEventListener('click', openMedFlexBooking);
        });
    }

    // Функция открытия записи MedFlex
    function openMedFlexBooking(e) {
        e.preventDefault();
        
        // Попытка открыть виджет MedFlex
        if (window.MedFlexWidget && typeof window.MedFlexWidget.open === 'function') {
            window.MedFlexWidget.open();
        } else {
            // Альтернативный способ - переход на страницу записи
            const medflexUrl = 'https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68';
            window.open(medflexUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
        }
    }

    // Резервный вариант для записи
    function setupFallbackBooking() {
        // Кнопка на главной странице
        const bookingButton = document.getElementById('medflex-booking-trigger');
        if (bookingButton) {
            bookingButton.addEventListener('click', openMedFlexBooking);
        }

        // Кнопки MedFlex на страницах услуг (вторая кнопка)
        const serviceBookingButtons = document.querySelectorAll('.booking-medflex');
        serviceBookingButtons.forEach(button => {
            button.addEventListener('click', openMedFlexBooking);
        });
    }

    // Инициализация при загрузке DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMedFlexIntegration);
    } else {
        initMedFlexIntegration();
    }

})();
