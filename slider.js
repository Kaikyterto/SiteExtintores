document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.slider .list');
    if (list) {
        const items = Array.from(list.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            list.appendChild(clone);
        });
    }
});
