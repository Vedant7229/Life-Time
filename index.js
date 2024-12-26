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
    const currentDate = new Date();
    const dateDiff = currentDate - DateOfBirth;
    const Year = Math.floor(dateDiff/(1000*60*60*24*365));
    const Months = Math.floor(dateDiff/(1000*60*60*24*365)%12);
    const Days = Math.floor(dateDiff/(1000*60*60*24)%30);
    const Hrs = Math.floor(dateDiff/(1000*60*60)%24);
    const Mins = Math.floor(dateDiff/(1000*60)%60);
    const Seconds = Math.floor(dateDiff/(1000)%60);

    

    yearEl.innerHTML = makeTwoDigitNumber(Year);
    monthEl.innerHTML = makeTwoDigitNumber (Months);
    dayEl.innerHTML = makeTwoDigitNumber (Days);
    hourEl.innerHTML = makeTwoDigitNumber (Hrs);
    minuteEl.innerHTML = makeTwoDigitNumber (Mins);
    secondEl.innerHTML = makeTwoDigitNumber (Seconds);
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
