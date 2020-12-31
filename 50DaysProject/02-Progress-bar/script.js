const nextButton = document.querySelector('#next')
const prevButton = document.querySelector('#prev')
const circles = document.querySelectorAll('.circle')
let percent = 0;
let activeCircles = 0;
let progress = document.querySelector('.progress')


function handleClick(e) {
    activeCircles++;

    if (activeCircles > 4) {
        activeCircles = 4;
    }
    percent += 33;
    prevButton.disabled = false;
    console.log(activeCircles);

    if (percent === 99) nextButton.disabled = true;
    progress.style.width = percent + '%';
    update();
}

function handleClickPrev() {
    activeCircles--;
    percent -= 33;
    nextButton.disabled = false;
    if (percent === 0) prevButton.disabled = true;
    progress.style.width = percent + '%';
    console.log(activeCircles);
    update();
}

function update() {
    circles.forEach((el, idx) => {
        if (idx > activeCircles) {
            el.classList.remove('active')
        } else {
            el.classList.add('active')
        }
    })
}

nextButton.addEventListener('click', handleClick)

prevButton.addEventListener('click', handleClickPrev)