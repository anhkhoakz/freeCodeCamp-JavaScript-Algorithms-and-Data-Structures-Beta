const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanText(text) {
    text = text.toLowerCase();
    text = text.replace(/[\W_]/g, "");
    return text;
}

function checkPalindrome(text) {
    const cleanedText = cleanText(text);
    const textLength = cleanedText.length;

    for (let i = 0; i < textLength / 2; i++) {
        if (cleanedText[i] !== cleanedText[textLength - 1 - i]) {
            return `${text} is not a palindrome`;
        }
    }
    return `${text} is a palindrome`;
}

checkButton.addEventListener("click", () => {
    const userText = textInput.value;

    if (userText.length === 0 || userText === null || !userText) {
        alert("Please input a value");
        return;
    }
    const resultText = checkPalindrome(userText);
    result.innerText = resultText;
});
