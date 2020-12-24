// Main Call back function for both the sliders
function Slider(elem) {
    if (!(elem[0] instanceof Element)) {
        throw new Error('No Slider passed in');
    }

    // Variables for storing Current, Next and Previous Slider
    let current;
    let next;
    let previous;
    const innerSlides = $(elem).find('.slides')[0];

    function applyClasses() {
        $(current).addClass('center');
        $(next).addClass('next');
        $(previous).addClass('prev');
    }

    function moveSlider(direction) {
        $(current).removeClass('center');
        $(next).removeClass('next');
        $(previous).removeClass('prev');

        if (direction === 'forward') {
            [previous, current, next] = [current, next, next.nextElementSibling || innerSlides.firstElementChild];
        } else if (direction === 'back') {
            [previous, current, next] = [
                previous.previousElementSibling || innerSlides.lastElementChild,
                previous,
                current,
            ];
        }

        applyClasses();
    }

    function startSlider() {
        current = $(innerSlides).find('.center')[0] || innerSlides.firstElementChild;
        next = current.nextElementSibling || innerSlides.firstElementChild;
        previous = current.previousElementSibling || innerSlides.lastElementChild;

        applyClasses();
    }

    // Set the Initial Slides from the function
    startSlider();

    // Event handlers for the buttons
    const $nextButton = $(elem)
        .find('.nextButton')
        .on('click', () => moveSlider('forward'));

    const $prevButton = $(elem)
        .find('.prevButton')
        .on('click', () => moveSlider('back'));
}

// Variables for Slider functionility
const gallery1 = Slider($('.slider'));
const gallery2 = Slider($('.small-slider'));