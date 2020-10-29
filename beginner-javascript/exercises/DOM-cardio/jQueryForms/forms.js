$(window).load(function() {
    $('.scrambled').text(displayNewWord());
});

const wordObj = { REYJUQ: 'JQUERY', AVJA: 'JAVA', RCSPIT: 'SCRIPT', ONTHYP: 'PYTHON' };

const wordArray = ['REYJUQ', 'AVJA', 'RCSPIT', 'ONTHYP'];

function displayNewWord() {
    randomNumber = Math.floor(Math.random() * wordArray.length);
    console.log(`Random no generated ${randomNumber}`);

    const newWord = wordArray[randomNumber];

    if (newWord !== $('.scrambled').text()) {
        return newWord;
    }
    return displayNewWord();
}

$('#joke-form').on('submit', function(e) {
    e.preventDefault();
    const word = $('.scrambled').text();

    const $ans = $(this).find('[type=text]').val();

    if ($ans === wordObj[word]) {
        $('div').toggleClass('lost', false);
        $('div').toggleClass('won', true);
        $('.result').text('Congrats.. you are correct..!!');

        const newWord = displayNewWord();

        $('.scrambled').text(newWord);
        $('input:text').val(function() {
            return this.defaultValue;
        });
    } else {
        $('div').toggleClass('won', false);
        $('div').toggleClass('lost', true);

        $('.result').text('Please try again...!');
        $('input:text').val(function() {
            return this.defaultValue;
        });
    }
});

// when the user submits the form,
//   check that their answer is correct
//   and show them appropriate message