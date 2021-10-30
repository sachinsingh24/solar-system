'use strict';

const mass = document.getElementById('mass');
const submit = document.getElementById('submit');
const selectedOP = document.getElementById('selected');
const errorMessage = document.getElementById('message');
const img = document.getElementById('img');

//validate
const validation = () => {
  if (mass.value == '' || mass.value == null) {
    MassageBox('Please Enter mass value', 1);
  } else if (selectedOP.value === 'none' || selectedOP.value === null) {
    MassageBox('Please select the planet', 1);
  } else {
    MassageBox(`The Weight of the object on`, 2);
  }
};

//calculate and display
const MassageBox = (message, opt) => {
  let cal = selectedOP.value * mass.value;
  let planet = selectedOP.options[selectedOP.selectedIndex].text;
  if (opt == 1) {
    errorMessage.innerHTML = `<h4>${message}</h4>`;
    errorMessage.style.width = '1000px';
    img.style.display = 'none';
  } else {
    errorMessage.style.width = '500px';
    img.style.width = '500px';
    img.style.display = 'block';
    img.innerHTML = `<img src="./assests/images/${planet}.png" alt="" >`;
    errorMessage.innerHTML = `<h4>${message} <span>${planet}</span><p>${cal.toFixed(
      2
    )} N</p></h4>`;
  }
};

//event listener
submit.addEventListener('click', validation);
