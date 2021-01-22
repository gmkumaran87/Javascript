class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.appId = '';
        this.faranheit = 273.15;
    }

    async getWeather() {
        const temp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.appId}`
        );

        const tempData = await temp.json();

        return tempData;
    }

    changeWeatherLoc(city, country) {
        this.city = city;
        this.country = country;
    }
}