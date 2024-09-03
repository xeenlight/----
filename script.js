function toggleMenu() {
    const headerContent = document.querySelector('.header-content');
    headerContent.classList.toggle('menu-open');
}

// Закрыть меню при изменении размера окна, если ширина больше 900px
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        document.querySelector('.header-content').classList.remove('menu-open');
    }
});
