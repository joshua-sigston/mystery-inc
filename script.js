const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navLink = document.querySelectorAll('.nav_link')

hamburger.addEventListener('pointerdown', () => {
    mobileNav.classList.toggle('toggle_nav')
    open.classList.toggle('hide')
    close.classList.toggle('show')
})

navLink.forEach( (link) => {
    link.addEventListener('pointerdown', () => {
        mobileNav.classList.toggle('toggle_nav')
        open.classList.toggle('hide')
        close.classList.toggle('show')
    })
})