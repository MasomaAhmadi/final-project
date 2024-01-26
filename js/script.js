const menu = document.getElementById('menu')
const nav = document.getElementById('mobile-nav')
const closeMenu = document.getElementById('close')

menu.addEventListener('click', () => {
    nav.classList.remove('hidden')
})

closeMenu.addEventListener('click', () => {
    nav.classList.add('hidden')
})
