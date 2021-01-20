class Weather {
    constructor() {
        this.appId = '37a4f98562cccd79e08032830a635a0a';
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