function Gallery(gall) {
    const $images = $(gall).children('img');
    const $modal = $('.modal');
    const $figure = $('figure');
    const $prevButton = $('.prev');
    const $nextButton = $('.next');
    let currImage;

    function closeModal() {
        $modal.removeClass('open');

        $(document).off('keyup', handleKeyUp);
    }

    function handleKeyUp(event) {
        if (event.key === 'Escape') return closeModal();
        if (event.key === 'ArrowRight') return showNextImage();
        if (event.key === 'ArrowLeft') return showPrevImage();
    }

    function showNextImage() {
        showImage(currImage.nextElementSibling || gall[0].firstElementChild);
    }

    function showPrevImage() {
        showImage(currImage.previousElementSibling || gall[0].lastElementChild);
    }

    function openModal() {
        const $classOpen = $modal.hasClass('open');
        console.log(typeof $classOpen);
        if ($classOpen) {
            console.log('Modal Already Opened');
            return;
        }

        $modal.addClass('open');

        // Handle Previous and Next button
        $(document).keyup(handleKeyUp);
    }

    function showImage(el) {
        console.log(el);
        const $img = $(el);
        const $src = $img.attr('src');
        const $alt = $img.attr('title');
        const $desc = $img.data().description;

        // Appending the values into the Modal
        const $newImg = $figure.children('img');
        const h2 = $figure[0].querySelector('h2');
        const p = $figure[0].querySelector('p');

        $(h2).text($alt);
        $(p).text($desc);
        $newImg.attr('src', $src);
        currImage = el;
        openModal();
    }

    function handleClickOutside(e) {
        console.log(e.target);
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    // Creating Event Listeners for the Image Pop-Up
    $images.toArray().forEach((el) => {
        $(el).on('click', (e) => showImage(e.currentTarget));
    });

    $modal.on('click', handleClickOutside);
}

const gallery1 = Gallery($('.gallery1'));
const gallery2 = Gallery($('.gallery2'));