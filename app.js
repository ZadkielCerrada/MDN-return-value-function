const input = document.querySelector(".numberInput");
const para = document.querySelector("p");

// Square
function squared(num) {
    return num * num;
}

// Cube
function cubed(num) {
    return num * num * num;
}

// Factorial
function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
}

input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = "You need to enter a number!";
    } else {
        para.textContent = `Squared is ${squared(num)}. `;
        para.textContent += `Cubed is ${cubed(num)}. `;
        para.textContent += `Factorial is ${factorial(num)}. `;
    }
});
