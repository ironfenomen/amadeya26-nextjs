/**
 * Мобильное меню
 */
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.main-nav__toggle');
    const menu = document.querySelector('.main-nav__list');
    const overlay = document.querySelector('.main-nav__overlay');
    
    if (!toggle || !menu || !overlay) return;
    
    // Открытие/закрытие меню
    function toggleMenu() {
        const isActive = menu.classList.contains('active');
        
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    function openMenu() {
        menu.classList.add('active');
        overlay.classList.add('active');
        toggle.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл
    }
    
    function closeMenu() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = ''; // Разблокируем скролл
        
        // Закрываем все выпадающие меню
        dropdownItems.forEach(item => {
            item.classList.remove('active');
            const dropdown = item.querySelector('.main-nav__dropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    // Получаем элементы выпадающих меню
    const dropdownItems = menu.querySelectorAll('.main-nav__item--dropdown');
    
    // Обработчики событий
    toggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Обработка выпадающих меню (только на мобильных устройствах)
    dropdownItems.forEach(item => {
        const link = item.querySelector('.main-nav__link');
        const dropdown = item.querySelector('.main-nav__dropdown');
        const mainLink = item.querySelector('.main-nav__link-text');
        const arrow = item.querySelector('.main-nav__arrow');
        
        if (link && dropdown && mainLink && arrow) {
            let isProcessing = false; // Флаг для предотвращения двойных срабатываний
            
            // Функция для переключения выпадающего меню
            function toggleDropdown(e) {
                // Проверяем, что мы на мобильном устройстве
                if (window.innerWidth <= 768 && !isProcessing) {
                    isProcessing = true;
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Закрываем все другие выпадающие меню
                    dropdownItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            const otherDropdown = otherItem.querySelector('.main-nav__dropdown');
                            if (otherDropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        }
                    });
                    
                    // Переключаем текущее меню
                    item.classList.toggle('active');
                    dropdown.classList.toggle('active');
                    
                    // Сбрасываем флаг через небольшую задержку
                    setTimeout(() => {
                        isProcessing = false;
                    }, 100);
                }
            }
            
            // Функция для обработки touch-событий на мобильных устройствах
            function handleTouch(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    return true;
                }
                return false;
            }
            
            // Обработчики для стрелочки - переключает выпадающее меню
            arrow.addEventListener('touchstart', function(e) {
                if (handleTouch(e)) {
                    toggleDropdown(e);
                }
            });
            
            arrow.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    toggleDropdown(e);
                }
            });
            
            let isNavigating = false; // Флаг для предотвращения двойных переходов
            
            // Обработчики для текста - переходит на основную страницу
            mainLink.addEventListener('touchstart', function(e) {
                if (handleTouch(e) && !isNavigating) {
                    isNavigating = true;
                    // Переходим на основную страницу
                    window.location.href = mainLink.href;
                }
            });
            
            mainLink.addEventListener('click', function(e) {
                if (window.innerWidth <= 768 && !isNavigating) {
                    isNavigating = true;
                    e.preventDefault();
                    e.stopPropagation();
                    // Переходим на основную страницу
                    window.location.href = mainLink.href;
                }
                // На десктопе позволяем обычное поведение (переход по ссылке)
            });
        }
    });
    
    // Закрытие меню при клике на ссылку (только для обычных ссылок)
    const regularLinks = menu.querySelectorAll('.main-nav__item:not(.main-nav__item--dropdown) a');
    regularLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Закрытие меню при клике на ссылки в выпадающих списках
    const dropdownLinks = menu.querySelectorAll('.main-nav__dropdown a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Закрытие меню при изменении размера окна (если перешли на десктоп)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Закрываем мобильное меню
            if (menu.classList.contains('active')) {
                closeMenu();
            }
            
            // Закрываем все выпадающие меню
            dropdownItems.forEach(item => {
                item.classList.remove('active');
                const dropdown = item.querySelector('.main-nav__dropdown');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });
});

