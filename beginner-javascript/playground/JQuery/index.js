let counter = 0;

function playSound() {
    const $sound = $('<audio preload=auto>');
    $sound.attr('src', 'https://www.kasandbox.org/programming-sounds/retro/jump2.mp3');
    $('body').append($sound);
    $sound[0].play();
}
function changeBackground(event) {
    console.log(`I am clicked ${counter} TIMES`);

    // First click makes the Leafer to Jump and make sound
    if (counter === 0) {
        const $leafer = $('#leafers');
        $leafer.css('top', `${410}px`);
        playSound();
    }
    counter++; // Increment teh click counter

    // When clicks 3rd time change the background
    if (counter === 2) {
        const $img = $('<img>', {
            src: 'https://www.kasandbox.org/programming-images/landscapes/thumbs/beach-sunset.png',
            alt: 'Image of Ocean',
        }).insertBefore('#leafers');

        $img.addClass('new-img');

        $('.bg-img').remove();

        counter++;
        // console.log(`After clicking ${counter}`);
    }
}

$('#leafers').on('click', changeBackground);
