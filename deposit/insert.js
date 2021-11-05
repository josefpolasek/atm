// setup
const button = document.getElementById("insertPage");
const enter = document.getElementById("enter");
const wait = document.getElementById("wait");
wait.style.display = "none";

//hide

// when a button is clicked
button.addEventListener("click", num => {
    const isButton = num.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }

    // choose action
    if(num.target.id === "buttonOk") {
        enter.style.display = "none";
        wait.style.display = "table-column";
        window.setTimeout(function() {window.location = "checkDeposit.html"}, 2000);
    };
    // else if (num.target.id === "buttNo") window.location = "deposit.html";
});