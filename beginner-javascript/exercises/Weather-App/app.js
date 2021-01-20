const form = document.querySelector('.form-control');
const search = document.getElementById('tempSearch');

const weather = new Weather();
const ui = new UI();

// Add Event Listener
search.addEventListener('click', getUpdates);

// Event Listener for Farenheit
const faren = document.querySelector('.farenheit');
console.log(faren);

faren.addEventListener('click', function() {
    this.classList.add('selected');
    this.classList.add('bordered');
    setTimeout(() => {
        this.classList.remove('bordered');
    }, 2000);
    console.log('After de-border');
    ui.tempChange();
});

function getUpdates(e) {
    e.preventDefault();

    const city = form.value;

    if (city !== '') {
        weather.getWeather(city).then((data) => {
            console.log(data);
            // Displaying the Temperature in the UI
            ui.displayTemp(data);
        });
    }
}