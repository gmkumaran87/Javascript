// eslint-disable-next-line no-unused-vars
class Storage {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'Tenkasi';
        this.defaultCountry = 'INDIA';
    }

    getStorageData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('country') === null) {
            this.country = this.defaultCountry;
        } else {
            this.country = localStorage.getItem('country');
        }

        return {
            city: this.city,
            country: this.country,
        };
    }

    setStorageData(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}