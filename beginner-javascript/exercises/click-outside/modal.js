const $buttons = $('.card button');
const $modalOuter = $('.modal-outer');
const $modalInner = $('.modal-inner');

// console.log($buttons);

function handleClick(e) {
    const $button = e.currentTarget;
    const div = $button.closest('.card');
    const $img = $(div).children('img');
    const $src = $img.attr('src');
    const $alt = $img.attr('alt');
    const $desc = $(div).data().description;

    /* noeslint */
    const $newImg = $('<img>', { src: $src, alt: $alt });
    const $newDiv = $('<div class="pop-up">').append($newImg);
    $modalInner.append($newDiv.append(`<p> ${$desc} </p>`));
    $modalOuter.addClass('open');
}

function closeModal() {
    $pop = $modalInner.children('.pop-up');
    $($pop).remove();

    $modalOuter.removeClass('open');
}

$(document).keydown(function(e) {
    if (e.key === 'Escape') {
        console.log(e);
        closeModal();
    }
});

$buttons.toArray().forEach((element) => {
    $(element).on('click', handleClick);
});

$modalOuter.on('click', function(e) {
    const isClickedOutside = !e.target.closest('.modal-inner');
    if (isClickedOutside) closeModal();
});