const form = document.getElementById('form');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const classification = document.getElementById('classification');
const minWeight = document.getElementById('min-weight');
const maxWeight = document.getElementById('max-weight');
const resultEl = document.getElementById('result');
const containerResult = document.getElementById('container-result');
const bmiEl = document.getElementById('bmi')
const welcome = document.getElementById('welcome')

console.log(form);

function calculateBMI(e) {
  const height = heightEl.value;
  const weight = weightEl.value;

  bmiEl.style.display = 'flex'
  welcome.style.display = 'none'
  
  const bmi = ((weight / (height * height)) * 10000).toFixed(1);

  console.log(height);
  console.log(weight);
  console.log(bmi);

  const heightM = height / 100;

  const min = (18.5 * heightM * heightM).toFixed(1);
  const max = (24.9 * heightM * heightM).toFixed(1)

  resultEl.innerText = bmi;

  minWeight.innerText = min;
  maxWeight.innerText = max;



  if (bmi < 18.5) {
    classification.innerText = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification.innerText = 'Healthy weight';
  } else if (bmi > 24.9 && bmi <= 29.9) {
    classification.innerText = 'Overweight';
  } else {
    classification.innerText = 'Obese';
  }
}

// Limit input of height and length
function limitLength() {
    if(heightEl.value.length > 3 || weightEl.value.length > 3) {
        heightEl.value = heightEl.value.slice(0, 3)
        weightEl.value = weightEl.value.slice(0, 3)
    }
}

// Add Eventlistener
form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && heightEl.value !== '' && weightEl.value !== '') {
    console.log('test');
    calculateBMI();
  } 
});

// Limit input
heightEl.addEventListener('input', limitLength)
weightEl.addEventListener('input', limitLength)

// Change radio button
const radioButtons = document.querySelectorAll('input[type="radio"]')

radioButtons.forEach(btn => {
    btn.addEventListener('change', e=> {
        console.log(e.target)
        if(e.target.value === 'imperial') {
            document.querySelector('.metric').style.display = 'none'
            document.querySelector('.imperial').style.display = 'block'
        } else {
            document.querySelector('.metric').style.display = 'flex'
            document.querySelector('.imperial').style.display = 'none'
        }
    })
})

console.log(radioButtons)