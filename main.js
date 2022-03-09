document.addEventListener('DOMContentLoaded', () => {
    const $navbarBITS = Array.prototype.slice.call(document.querySelectorAll('.navbar-bits'), 0);

    if ($navbarBITS.length > 0) {
        $navbarBITS.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});