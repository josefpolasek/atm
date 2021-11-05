// setup
const pinNumber = "1234";
let displayedNumber = "";
let attemptsNum = 3;
const inputPin = document.getElementById("inputPin");
const button = document.getElementById("secondPage");

// when a button is clicked
button.addEventListener("click", num => {
    const isButton = num.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }

    // choose action
    if(num.target.id === "pEnter") submit();
    else if(num.target.id === "pDelete") deleteIn();
    else if(num.target.id === "returnCard") window.location = "atm.html";
    else addNum(num.target.innerText);
});

//adds number to displayedNumber string and updates displayed number
const addNum = (num) => {
    displayedNumber += num;
    updateIn();
    console.log(displayedNumber);
};

// check whether the typed number is correct -> go to a new page
const submit = () => {
    if (displayedNumber === pinNumber) window.location = '../navigation/navigation.html';
    else {
        displayedNumber = "";
        attemptsNum -= 1;
        alert("Error: incorrect PIN! You have attemts " + attemptsNum + " left.");
        if (attemptsNum === 0) window.location = "atm.html";
        updateIn();
    }
};

// update the input element
const updateIn = () => {
    if (displayedNumber.length > 0) {
    inputPin.value = displayedNumber;
    inputPin.type = "password";
    } else {
      inputPin.value = "Enter PIN";
      inputPin.type = "text";
    }
}

// delete last number
const deleteIn = () => {
    if (displayedNumber.length > 0) {
        displayedNumber = displayedNumber.slice(0, -1);
    }
    updateIn();
}
