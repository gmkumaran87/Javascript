const $images = $('img');
const $mySlides = $('.mySlides');
let counter = 0;

animateImage(counter);

function animateImage(index) {
    $mySlides.hide();

    $($mySlides[index]).css('display', 'block');

    const $text = $($mySlides[index]).children('.text');
    const $alt = $($mySlides[index]).children('img').attr('alt');

    $text.text($alt);
}

$('.next').on('click', function() {
    counter++;
    if (counter > $images.length - 1 || counter < 0) {
        counter = 0;
    }

    animateImage(counter);
});
$('.prev').on('click', function() {
    counter--;

    if (counter < 0) {
        counter = 3;
    }
    animateImage(counter);
});