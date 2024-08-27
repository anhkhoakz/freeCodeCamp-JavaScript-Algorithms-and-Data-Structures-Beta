const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkUserInput = () => {
    const userInputValue = userInput.value;
    if (userInputValue === "") {
        alert("Please provide a phone number");
        return;
    }
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    const resultParagaph = document.createElement("p");
    if (regex.test(userInputValue)) {
        resultParagaph.innerText = `Valid US number: ${userInputValue}`;
    } else {
        resultParagaph.innerText = `Invalid US number: ${userInputValue}`;
    }
    result.appendChild(resultParagaph);
};

const clearResult = () => {
    result.innerText = "";
};

checkBtn.addEventListener("click", () => {
    checkUserInput();
});

clearBtn.addEventListener("click", () => {
    clearResult();
});
