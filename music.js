const pages = document.querySelectorAll('.page');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

if (music && musicBtn) {
    music.addEventListener('play', () => {
        musicBtn.textContent = '❚❚';
        musicBtn.setAttribute('aria-label', 'Pause music');
    });
    music.addEventListener('pause', () => {
        musicBtn.textContent = '♫';
        musicBtn.setAttribute('aria-label', 'Play music');
    });
    music.addEventListener('error', () => {
        musicBtn.textContent = '♫';
        musicBtn.setAttribute('aria-label', 'Play music');
    });
}

function showPage(pageId) {
    pages.forEach((page) => {
        const isActive = page.id === pageId;
        page.classList.toggle('active', isActive);
    });
}

function startStory() {
    showPage('letter');
    if (music) {
        music.volume = 0.6;
        music.play().catch(() => {
            if (musicBtn) musicBtn.textContent = '♫';
        });
    }
}

function toggleMusic() {
    if (!music) return;

    music.volume = 0.6;

    if (music.paused) {
        music.play().catch(() => {
            if (musicBtn) musicBtn.setAttribute('aria-label', 'Play music');
        });
    } else {
        music.pause();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    if (musicBtn) {
        musicBtn.setAttribute('aria-label', 'Play music');
    }
});
