class Weather {
    constructor() {
        this.appId = '#';
        this.faranheit = 273.15;
    }

    async getWeather(city, country = 'india') {
        const temp = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${this.appId}`
        );

        const tempData = await temp.json();

        return tempData;
    }
}