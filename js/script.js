const menu = document.getElementById('menu')
const nav = document.getElementById('mobile-nav')

menu.addEventListener('click', () => {
    nav.classList.toggle('hidden')
})