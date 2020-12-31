console.log('Hi There')

const elPanel = document.querySelectorAll('.panel')

function handleClick(e) {
    console.log(this)
    const activeEl = document.querySelectorAll('.active')

    activeEl.forEach(el => {
        el.classList.remove('active');
    })
    this.classList.toggle('active')
}
elPanel.forEach(el => el.addEventListener('click', handleClick));