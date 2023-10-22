const powerButton = document.getElementById("display");

let temperature = 21;
let mode = "summer"; 
let level = 0;
let isOn = true;


const dateObj = document.getElementById("date");
const temperatureObj = document.getElementById("temperature");
const levelObj = document.getElementById("level");
const modusObj = document.getElementById("modus");

document.getElementById("on-off-button").addEventListener("click", turnOnOff);
document.getElementById("level-button").addEventListener("click", levelChange);
document.getElementById("mode-button").addEventListener("click", modeChange);
document.getElementById("plus-button").addEventListener("click", increaseTemperature);
document.getElementById("minus-button").addEventListener("click", decreaseTemperature);

const time = () => setInterval(updateTime, 1000)

function updateTime() {
    dateObj.innerText = new Date().toLocaleString('en-GB', {timeZone: 'UTC'}) + " - "
        + getGreetingDependOnTime(new Date());
}

time();

function turnOnOff() {
    isOn = !isOn;
    updateDisplay();
}

function updateDisplay() {
    if (!isOn) {
        temperatureObj.innerText = `Temperatur: ${temperature} Celsius`
        levelObj.innerText = `Level: ${level}`
        modusObj.innerText = `Modus: ${mode}`
    } else {
        temperatureObj.innerText = ""
        levelObj.innerText = ""
        modusObj.innerText = ""
    }
}

// this function returns a greeting based on the curent time
getGreetingDependOnTime = function (myDate) {
    const timeBegin = 6;
    const timeEnd = 22;
    const currentHour = myDate.getHours();

    if (currentHour >= timeBegin && currentHour < timeEnd){
        return "Guten Morgen";
    } else {
        return "Guten Abend";
    }
}

//decreases the temperature by subtracting 1 degree
function decreaseTemperature() {
    temperature--;
    updateDisplay();
}

//increases the temperature by adding 1 degree
function increaseTemperature() {
    temperature++;
    updateDisplay();
}

//changes the level of the fan speed
function levelChange() {
    if (level < 3)
        level++;
    else
        level = 0
    updateDisplay();
}

//changes the mode of the machine
function modeChange() {
    mode == "summer" ? mode = "winter" : mode = "summer"
    updateDisplay();
}