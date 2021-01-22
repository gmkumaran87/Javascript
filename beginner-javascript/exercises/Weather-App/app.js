const form = document.querySelector('.form-control');
const search = document.getElementById('tempSearch');

const faren = document.querySelector('.farenheit');
const celcius = document.querySelector('.celcius');

const storage = new Storage();
const weatherLoc = storage.getStorageData();

const weather = new Weather(weatherLoc.city, weatherLoc.country);
const ui = new UI();

// Setting the flag whether the displaying Temp in Celcius or Faranheit
let tempFlag = 'C';

// Show the Initial City for the App
window.addEventListener('DOMContentLoaded', getUpdates);

// Add Event Listener
search.addEventListener('click', (e) => {
    e.preventDefault();

    const place = form.value;

    [city, country] = place.split(',');

    weather.changeWeatherLoc(city, country);

    storage.setStorageData(city, country);
    getUpdates();
});

function getUpdates() {
    weather.getWeather().then((data) => {
        console.log(data);
        // Displaying the Temperature in the UI
        ui.displayTemp(data);
    });
}

function displayTemp() {
    tempFlag = this.textContent;

    // REmove the CSS Selected    if it is assigned already
    const select = document.querySelector('.selected');
    if (select) {
        select.classList.remove('selected');
    }

    this.classList.toggle('selected');
    this.classList.toggle('bordered');
    setTimeout(() => {
        this.classList.remove('bordered');
    }, 2000);

    ui.tempChange(tempFlag);

    setEventListener();
}

// Event Listener for Farenheit

function setEventListener() {
    if (tempFlag === 'C') {
        celcius.removeEventListener('click', displayTemp);
        faren.addEventListener('click', displayTemp);
    } else {
        faren.removeEventListener('click', displayTemp);
        celcius.addEventListener('click', displayTemp);
    }
}

setEventListener();