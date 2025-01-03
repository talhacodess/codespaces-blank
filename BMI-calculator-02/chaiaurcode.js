const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if (!height || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height`;
        message.innerHTML = ''; // Clear message
    } else if (!weight || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight`;
        message.innerHTML = ''; // Clear message
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI: ${bmi}</span>`;

        // BMI categories
        if (bmi < 18.6) {
            message.innerHTML = 'You are underweight.';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message.innerHTML = 'Your weight is normal.';
        } else {
            message.innerHTML = 'You are overweight.';
        }
    }
});


