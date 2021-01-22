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

        // Display description
        this.tempDescEl.innerHTML = data.weather[0].main;

        /* if (data.weather[0].main === 'Clouds') {
            document.querySelector('.weather-body').style.backgroundImage = "url('images/clouds_background.jpeg')";
        } */

        this.image.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

        // Temperature date
        this.tempDateEl.innerHTML = `Updated as on ${timestr}`;

        // Feels Like
        this.feels.innerHTML = `Feels like  ${Math.floor(data.main.feels_like - 273.15)} <span>&#176</span>`;

        // Wind
        this.wind.innerHTML = `Wind ${Math.floor(data.wind.speed * 3.6)} Km/h`;

        // Visibility
        this.visible.innerHTML = `Visibility ${data.visibility / 1000} Km`;
    }

    tempInCelcius(temp) {
        return Math.floor(((temp - 32) * 5) / 9);
    }

    tempInFaranheit(temp) {
        return Math.floor(temp * (9 / 5) + 32);
    }

    // Change the temperature from Celcius to Farenheit
    tempChange(flag) {
        const newTemp = document.getElementById('tempDisp');

        if (flag === 'F') {
            newTemp.innerHTML = `${this.tempInFaranheit(newTemp.textContent)}`;
        } else {
            newTemp.innerHTML = `${this.tempInCelcius(newTemp.textContent)}`;
        }
    }
}