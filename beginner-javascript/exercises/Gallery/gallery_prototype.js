function Gallery(gall) {
    this.gall = gall;
    this.$images = $(this.gall).children('img');
    this.$modal = $('.modal');
    this.$figure = $('figure');
    this.$prevButton = $('.prev');
    this.$nextButton = $('.next');
    // let currImage;

    console.log(this);

    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    // Creating Event Listeners for the Image Pop-Up
    this.$images.toArray().forEach((el) => {
        $(el).on('click', (e) => this.showImage(e.currentTarget));
    });

    this.$modal.on('click', this.handleClickOutside);
}

Gallery.prototype.closeModal = function() {
    this.$modal.removeClass('open');

    $(document).off('keyup', this.handleKeyUp);
};

Gallery.prototype.handleKeyUp = function(event) {
    console.log(this);
    if (event.key === 'Escape') return this.closeModal();
    if (event.key === 'ArrowRight') return this.showNextImage();
    if (event.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showNextImage = function() {
    this.showImage(this.currImage.nextElementSibling || this.gall[0].firstElementChild);
};

Gallery.prototype.showPrevImage = function() {
    this.showImage(this.currImage.previousElementSibling || this.gall[0].lastElementChild);
};

Gallery.prototype.openModal = function() {
    const $classOpen = this.$modal.hasClass('open');

    if ($classOpen) {
        console.log('Modal Already Opened');
        return;
    }

    this.$modal.addClass('open');

    // Handle Previous and Next button
    $(document).keyup(this.handleKeyUp);
};

Gallery.prototype.showImage = function(el) {
    console.log(el);
    const $img = $(el);
    const $src = $img.attr('src');
    const $alt = $img.attr('title');
    const $desc = $img.data().description;

    // Appending the values into the Modal
    const $newImg = this.$figure.children('img');
    const h2 = this.$figure[0].querySelector('h2');
    const p = this.$figure[0].querySelector('p');

    $(h2).text($alt);
    $(p).text($desc);
    $newImg.attr('src', $src);
    this.currImage = el;
    this.openModal();
};

Gallery.prototype.handleClickOutside = function(e) {
    console.log(this);

    if (e.target === e.currentTarget) {
        this.closeModal();
    }
};

const gallery1 = new Gallery($('.gallery1'));
// const gallery2 = new Gallery($('.gallery2'));

// console.log(gallery1);