// sticky navbar
window.onscroll = () => {
    let header = document.querySelector('.header');

    header.classList.toggle('stickey', window.scrollY > 100)
}
