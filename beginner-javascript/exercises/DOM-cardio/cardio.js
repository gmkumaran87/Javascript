// Make a div add a class of wrapper to it and put it into the body
const $newDiv = $('<div>').addClass('wrapper').prependTo('body');

// Creating list values in an array for traversing and creating the list dynamically
const listEl = ['one', 'two', 'three'];

/* make an unordered list
add three list items with the words "one, two, three" in them
put that list into the above wrapper 
*/

const $ul = $('<ul>').addClass('newList');

listEl.forEach((element) => $($ul).append(`<li>${element}</li>`));

$newDiv.append($ul);

/* create an image
set the source to an image
 set the width to 250
 add a class of cute
 add an alt of Cute Puppy
 Append that image to the wrapper */

$img = $('<img>', {
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/English_Daisy_(Bellis_Perennis).jpg',
        alt: 'Cute Puppy',
        width: '250',
    })
    .addClass('cute')
    .appendTo($newDiv);

/* with HTML string, make a div, with two paragraphs inside of it
 put this div before the unordered list from above */

const $paragraph = $('<p>').text('The new discovery of the above two animals evolution has made a history...!');
const $paragraph2 = $('<p>').text('The below flower is very beautifull...!');

$('<div class="para-div">').css('margin-top', '50px').append($paragraph).append($paragraph2).prependTo($newDiv);

// add a class to the second paragraph called warning
// remove the first paragraph
$('.para-div p:nth-child(2)').addClass('warning');
// $('.para-div p:nth-child(1').remove();

/* create a function called generatePlayerCard that takes in three arguments: name, age, and height
   have that function return html that looks like this:
    <div class="playerCard">
        <h2>NAME — AGE</h2>
        <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    </div> */

function generatePlayerCard(name, age, height) {
    const $generateDiv = $('<div class="playerCard">')
        .append(`<h2>NAME - ${name}</h2>`)
        .append(
            `<p> They are ${height} and ${age} years old. In Dog years this person would be ${
                age * height
            }. That would be a tall dog!</p>`
        )
        .append(`<button class='btn' type="button">Delete me</button>`);
    return $generateDiv;
}

// Creating an Array Object to store the DIV values
const divVal = [
    { name: 'Muthu', age: 30, height: 150 },
    { name: 'Kumaran', age: 32, height: 160 },
    { name: 'Kavin', age: 25, height: 170 },
    { name: 'Lavanya', age: 29, height: 170 },
];

/* make a new div with a class of cards */
const $cardDiv = $('<div class="cards">');

/* Make 4 player cards using generatePlayerCard and  append those cards to the div,
 put the div into the DOM just before the wrapper element */

divVal.forEach((obj) => $cardDiv.append(generatePlayerCard(obj.name, obj.age, obj.height)));
$newDiv.prepend($cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
function deleteCard(event) {
    const buttonClicked = event.currentTarget;
    buttonClicked.closest('.playerCard').remove();
}

const $button = $('.btn');

const $buttonArray = jQuery.makeArray($button);

$buttonArray.forEach((elem) => {
    $(elem).on('click', deleteCard);
});