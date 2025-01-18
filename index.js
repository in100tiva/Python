document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const topicButtons = document.querySelectorAll('.topic-btn');
    const slideContents = document.querySelectorAll('.slide-content');

    // Theme toggle
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', themeSwitch.checked);
    });

    // Topic switching
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.dataset.topic;
            
            // Update active button
            topicButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show selected content
            slideContents.forEach(content => {
                content.style.display = content.id === `${topic}-content` ? 'block' : 'none';
            });
        });
    });
});
