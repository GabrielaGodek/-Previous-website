//navigation variables
const menuBtn = document.querySelector('.menu')
const menuLink = document.querySelectorAll('nav ul a ')
const open = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

//navigation
// function noScroll() {
//     window.scrollTo(0, 0)
// }
const handNav = () => {
    nav.classList.toggle('active')
    menuBtn.classList.toggle('activeBtn')
    close.classList.toggle('hide')
    open.classList.toggle('hide')
    // window.addEventListener('scroll', noScroll)
}
menuBtn.addEventListener('click', handNav)

// open.addEventListener('click', function(){
//     window.addEventListener('scroll', noScroll)
// })
menuLink.forEach((link) => {
    link.addEventListener('click', function () {
        nav.classList.toggle('active')
        menuBtn.classList.toggle('activeBtn')
        close.classList.toggle('hide')
        open.classList.toggle('hide')
        // window.removeEventListener('scroll', noScroll)
    })
})

// close.addEventListener('click', function () {
//     window.removeEventListener('scroll', noScroll)
// })






