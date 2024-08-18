const userNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    output.innerText = validateInput();
});

const ArabicToRoman = (n) => {
    const ref = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];
    const res = [];

    ref.forEach((arr) => {
        while (n >= arr[1]) {
            res.push(arr[0]);
            n -= arr[1];
        }
    });
    return res.join("");
};

const validateInput = () => {
    const number = parseInt(userNumber.value);
    if (!userNumber.value || isNaN(number)) {
        return "Please enter a valid number";
    }
    if (number < 1) {
        return "Please enter a number greater than or equal to 1";
    }
    if (number > 3999) {
        return "Please enter a number less than or equal to 3999";
    }
    return ArabicToRoman(number);
};
