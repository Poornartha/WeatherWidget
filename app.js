

const ui = new UI();

// Setup for Local Storage:
const storage = new Storage();

// Get Stored Location Data:
const weatherLoc = storage.getLocationData();

// Init Weather Obj:
const weather = new Weather(weatherLoc);

document.addEventListener('DOMContentLoaded', getWeather);


// Change Location:
document.querySelector('.w-form').addEventListener('submit', (e) => {
    const city = document.getElementById('city').value;
    
    weather.changeLocation(city);
    
    // Set Local Storage Location:
    storage.setLocationData(city);
    
    getWeather();
    // console.log(e);
    // Close Modal:
    $('#locModal').modal('hide');

    e.preventDefault();
});

// document.getElementById('city').addEventListener('keyup', e => {
//     console.log(e.keyCode);
//     if(e.keyCode === 13) {
//         e.preventDefault();
//         document.getElementById('w-change-btn').click();
//     }
// })


function getWeather() {weather.getWeather().
    then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}






