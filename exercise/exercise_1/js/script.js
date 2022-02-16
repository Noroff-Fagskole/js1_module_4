// 1. Select the input with id
const firstName = document.querySelector("#firstName");
const errorContainerMessage = document.querySelector(".error__container");
const errorContainerSvg = document.getElementById("error-icon");
// 2. add an event to the input >> keyup onkeyup

firstName.addEventListener("keyup", logLengthMsg);

// 3. get the length of the input
function logLengthMsg(event) {
// get the value of the input
    const inputValue = event.target.value;
    const valueLength = inputValue.length;
    if (valueLength > 0) {
        errorContainerMessage.innerHTML = "the input has no value";
        errorContainerSvg.style.display = "block";
    } else {
        errorContainerSvg.style.display = "block";
        errorContainerMessage.innerHTML = "he input dosen`t have value";
    }
}

//4. make a condition
// if the length is > 0
// show a message " the input has value" else
// show a message "he input dosen`t have value