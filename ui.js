
class UI {
    constructor () {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        this.icon = document.getElementById('w-icon');
        // this.details = document.getElementById('w-details')
    }

    paint(weather) {
        this.location.textContent = weather.city.toUpperCase();
        this.description.textContent = weather.weather.main;
        this.string.innerHTML = `${weather.main.temp} <span>&#8451;</span>`;
        this.humidity.textContent = "Humidity: " + weather.main.humidity + "%";
        this.feelslike.innerHTML = "Feels Like: " + weather.main.feels_like + `<span>&#8451;</span>`;
        this.pressure.textContent = "Pressure: " + weather.main.pressure + "mb";
        this.wind.textContent = "Wind Speed: " + weather.wind.speed + "m/s";
        const icon_url = "http://openweathermap.org/img/w/" + weather.weather.icon + ".png";
        // console.log(icon_url)
        this.icon.setAttribute('src', icon_url);
    }
} 