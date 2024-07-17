function toggleHamburguerMenu() {
    const hamburguerMenu = document.getElementById('hamburguerMenu');

    if (hamburguerMenu.style.display == 'flex') {
        hamburguerMenu.style.display = 'none';
    } else {
        hamburguerMenu.style.display = 'flex';
    }
}
