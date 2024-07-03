AOS.init();

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const allContents = document.querySelectorAll('.accordion-content');

        allContents.forEach(el => {
            if (el !== content) {
                el.style.display = 'none';
                el.parentElement.classList.remove('open');
            }
        });

        if (content.style.display === 'block') {
            content.style.display = 'none';
            this.parentElement.classList.remove('open');
        } else {
            content.style.display = 'block';
            this.parentElement.classList.add('open');
        }
    });
});