const btn = document.getElementById('theme-toggle');
const themeIcon = btn.querySelector('i');
const allVideos = document.querySelectorAll('video');

btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    const isLightMode = document.body.classList.contains('light-mode');

    themeIcon.classList.toggle('fa-sun', !isLightMode);
    themeIcon.classList.toggle('fa-moon', isLightMode);

    allVideos.forEach(video => {
        let currentSrc = video.getAttribute('src');

        if (isLightMode) {
            if (currentSrc === 'assets/banner.mp4') video.src = 'assets/inverted-banner.mp4';
            else if (currentSrc === 'assets/inverted-banner.mp4') video.src = 'assets/banner.mp4';
        } else {
            if (currentSrc === 'assets/inverted-banner.mp4') video.src = 'assets/banner.mp4';
            else if (currentSrc === 'assets/banner.mp4') video.src = 'assets/inverted-banner.mp4';
        }

        video.load();
        video.play();
    });
});