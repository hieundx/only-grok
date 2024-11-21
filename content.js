function createOverlay() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    overlay.style.zIndex = '1000';
    document.body.appendChild(overlay);
    return overlay;
}

const overlay = createOverlay();

const interval = setInterval(() => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
        header.remove();
        main.style.alignItems = 'center';
        overlay.remove();
        clearInterval(interval);
    }
}, 500);
