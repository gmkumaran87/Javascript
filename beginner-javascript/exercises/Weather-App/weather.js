class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.appId = '37a4f98562cccd79e08032830a635a0a';
        this.faranheit = 273.15;
    }

    async getWeather() {
        const temp = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.appId}`
        );

        const tempData = await temp.json();

        return tempData;
    }

    changeWeatherLoc(city, country) {
        this.city = city;
        this.country = country;
    }
}