// Main Call back function for both the sliders
function Slider(elem) {
    if (!(elem[0] instanceof Element)) {
        throw new Error('No Slider passed in');
    }

    // Variables for storing Current, Next and Previous Slider
    /* let current;
    let next;
    let previous; */
    this.innerSlides = $(elem).find('.slides')[0];

    // Set the Initial Slides from the function
    this.startSlider();

    // Event handlers for the buttons
    const $nextButton = $(elem)
        .find('.nextButton')
        .on('click', () => this.moveSlider('forward'));

    const $prevButton = $(elem)
        .find('.prevButton')
        .on('click', () => this.moveSlider('back'));
}

// Prototype Methods of Slider
Slider.prototype.applyClasses = function() {
    $(this.current).addClass('center');
    $(this.next).addClass('next');
    $(this.previous).addClass('prev');
};

Slider.prototype.moveSlider = function(direction) {
    $(this.current).removeClass('center');
    $(this.next).removeClass('next');
    $(this.previous).removeClass('prev');

    if (direction === 'forward') {
        [this.previous, this.current, this.next] = [
            this.current,
            this.next,
            this.next.nextElementSibling || this.innerSlides.firstElementChild,
        ];
    } else if (direction === 'back') {
        [this.previous, this.current, this.next] = [
            this.previous.previousElementSibling || this.innerSlides.lastElementChild,
            this.previous,
            this.current,
        ];
    }

    this.applyClasses();
};

Slider.prototype.startSlider = function() {
    this.current = $(this.innerSlides).find('.center')[0] || this.innerSlides.firstElementChild;
    this.next = this.current.nextElementSibling || this.innerSlides.firstElementChild;
    this.previous = this.current.previousElementSibling || this.innerSlides.lastElementChild;

    this.applyClasses();
};

// Variables for Slider functionility
const gallery1 = new Slider($('.slider'));
const gallery2 = new Slider($('.small-slider'));

console.log(gallery1);