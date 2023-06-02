window.addEventListener('resize', function() {
    var container = document.querySelector('.container');

    if (window.innerWidth < 600) {
        container.classList.add('small');
        container.classList.remove('medium', 'large');
    } else if (window.innerWidth >= 600 && window.innerWidth < 1200) {
        container.classList.add('medium');
        container.classList.remove('small', 'large');
    } else {
        container.classList.add('large');
        container.classList.remove('small', 'medium');
    }
});
