document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.getElementById('navbarNav');
    const body = document.body;

    navbarCollapse.addEventListener('show.bs.collapse', function () {
        body.classList.add('menu-open');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        body.classList.remove('menu-open');
    });
});