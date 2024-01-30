document.addEventListener('DOMContentLoaded', function () {
    const projectSections = document.querySelectorAll('#projects h2 + *');

    projectSections.forEach(section => {
        section.style.display = 'none';
    });

    document.querySelectorAll('#projects h2').forEach(title => {
        title.addEventListener('click', function () {
            const section = this.nextElementSibling;

            if (section.style.display === 'none') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});