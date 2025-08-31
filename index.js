let isDOBOpen = false;
let DateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBEl = document.getElementById("afterDOB");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");


const yearEl = document.getElementById("Year");
const monthEl = document.getElementById("Months");
const dayEl = document.getElementById("Days");
const hourEl = document.getElementById("Hr");
const minuteEl = document.getElementById("Mins");
const secondEl = document.getElementById("Seconds");

const makeTwoDigitNumber = (number)=> {
    return number > 9 ? number : `0${number}`;
};
const toggleDateofBirthSelector = () => {

    if (isDOBOpen) {
        settingContentEl.classList.add("hide");

    }
    else {
        settingContentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;

    console.log("Toggle", isDOBOpen);

};
const updateAge = () => {
    if (!DateOfBirth) return;

    const currentDate = new Date();

    let years = currentDate.getFullYear() - DateOfBirth.getFullYear();
    let months = currentDate.getMonth() - DateOfBirth.getMonth();
    let days = currentDate.getDate() - DateOfBirth.getDate();
    let hours = currentDate.getHours() - DateOfBirth.getHours();
    let minutes = currentDate.getMinutes() - DateOfBirth.getMinutes();
    let seconds = currentDate.getSeconds() - DateOfBirth.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Get days in previous month
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    yearEl.innerHTML = makeTwoDigitNumber(years);
    monthEl.innerHTML = makeTwoDigitNumber(months);
    dayEl.innerHTML = makeTwoDigitNumber(days);
    hourEl.innerHTML = makeTwoDigitNumber(hours);
    minuteEl.innerHTML = makeTwoDigitNumber(minutes);
    secondEl.innerHTML = makeTwoDigitNumber(seconds);
};



const setDOBHandler = () => {
    const dateString = dobInputEl.value;

    DateOfBirth = dateString ? new Date(dateString) : null ; 

    
    if (DateOfBirth) {
          
        initialTextEl.classList.add("hide");
        afterDOBEl.classList.remove("hide");
    
    setInterval( () => updateAge(),1000);
    } else {
        initialTextEl.classList.remove("hide");
        afterDOBEl.classList.add("hide");
    }
};

setDOBHandler();


settingCogEl.addEventListener("click", toggleDateofBirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);
