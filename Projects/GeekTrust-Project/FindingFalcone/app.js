console.log('Im here')
const toggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')


function transition(e) {
    console.log(e.currentTarget)
    links.classList.toggle('show-links');
}

console.log(toggle);
toggle.addEventListener('click', transition);