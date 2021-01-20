class UI {
    constructor() {
        this.city = document.getElementById('city');
        this.tempEl = document.getElementById('tempDisp');
        this.tempDescEl = document.getElementById('tempDesc');
        this.tempDateEl = document.getElementById('tempDate');
        this.feels = document.getElementById('feels');
        this.wind = document.getElementById('wind');
        this.visible = document.getElementById('visibility');
        this.image = document.getElementById('tempImage');
    }

    // eslint-disable-next-line class-methods-use-this
    displayTemp(data) {
        const sec = data.dt;
        const date = new Date(sec * 1000);
        const timestr = date.toLocaleTimeString();
        // Displaying the selected City
        this.city.innerHTML = `${data.name}, ${data.sys.country}`;

        // Displaying the Temperature
        this.tempEl.innerHTML = `${Math.floor(data.main.temp - 273.15)}`;

        console.log(this.image);
        this.image.src = '.images/Sunny.png';

        // Display description
        this.tempDescEl.innerHTML = data.weather[0].main;

        // Temperature date
        this.tempDateEl.innerHTML = `Updated as on ${timestr}`;

        // Feels Like
        this.feels.innerHTML = `Feels like  ${this.tempInCelcius(data.main.feels_like)} <span>&#176</span>`;

        // Wind
        this.wind.innerHTML = `Wind ${data.wind.speed * 3.6} Km/h`;

        // Visibility
        this.visible.innerHTML = `Visibility ${data.visibility / 1000} Km`;
    }

    tempInCelcius(temp) {
        return Math.floor(temp - 273.15);
    }

    tempInFaranheit(temp) {
        return Math.floor(temp * (9 / 5) + 32);
    }

    // Change the temperature from Celcius to Farenheit
    tempChange() {
        const newTemp = document.getElementById('tempDisp');
        console.log(newTemp.textContent);
        newTemp.innerHTML = `${this.tempInFaranheit(newTemp.textContent)}`;
    }
}