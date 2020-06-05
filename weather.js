
class Weather {
    constructor (city) {
        this.api_key = "32740d2fb7baf1afcb45f3619ee732fd";
        this.city = city;
    }

    async getWeather () {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}`);
        const responseData = await response.json();
        
        const responseObj = {
            city: this.city,
            main: responseData.main,
            wind: responseData.wind,
            weather: responseData.weather[0],
        }

        return responseObj
        
    }

    changeLocation (city) {
        this.city = city;
    }
}