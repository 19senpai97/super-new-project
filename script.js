document.querySelectorAll('.openCalculator').forEach(button => {
    button.addEventListener('click', function() {
        const calculator = document.getElementById(this.dataset.target);
        calculator.style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.calculator').style.display = 'none';
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('calculator')) {
        event.target.style.display = 'none';
    }
};

// Triangle Area Calculation
document.getElementById('calculateArea').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        document.getElementById('triangleResult').textContent = "Please enter valid positive numbers!";
    } else {
        const area = 0.5 * base * height;
        document.getElementById('triangleResult').textContent = `The area of the triangle is: ${area}`;
    }
});

// Average Calculation
document.getElementById('calculateAverage').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        document.getElementById('averageResult').textContent = "Please enter valid numbers!";
    } else {
        const average = (num1 + num2 + num3 + num4 + num5) / 5;
        document.getElementById('averageResult').textContent = `The average is: ${average}`;
    }
});

// Celsius to Fahrenheit Conversion
document.getElementById('convertCelsius').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);

    if (isNaN(celsius)) {
        document.getElementById('celsiusResult').textContent = "Please enter a valid number!";
    } else {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('celsiusResult').textContent = `${celsius}°C is equal to ${fahrenheit}°F`;
    }
});

// Dynamic Input Display
document.getElementById('displayNumber').addEventListener('click', function() {
    const number = parseInt(document.getElementById('dynamicInput').value);

    if (isNaN(number) || number <= 0) {
        document.getElementById('displayResult').textContent = "Please enter a valid positive number!";
    } else {
        let result = '';  
        for (let i = 1; i <= number; i++) {
            result += '*'.repeat(i) + '<br>';  
        }
        document.getElementById('displayResult').innerHTML = result;  
    }
});
