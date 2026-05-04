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

const projetos = document.querySelectorAll('.card-projeto');

console.log("Quantidade de projetos encontrados:", projetos.length);

projetos.forEach((projeto, index) => {
    const video = projeto.querySelector('video');

    projeto.addEventListener('mouseenter', () => {
        console.log(`Mouse entrou no projeto ${index}`);
        if (video) {
            video.play().catch(e => console.error("Erro ao dar play:", e));
        }
    });

    projeto.addEventListener('mouseleave', () => {
        console.log(`Mouse saiu no projeto ${index}`);
        if (video) {
            video.pause();
        }
    });
});