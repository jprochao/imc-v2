function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleCalculateImc);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleCalculateImc);
  inputHeight.addEventListener('input', handleCalculateImc);

  handleCalculateImc();
}

function handleCalculateImc() {
  var inputWeight = Number(document.querySelector('#input-weight').value);
  var inputHeight = Number(document.querySelector('#input-height').value);

  var imc = calculateImc(inputWeight, inputHeight);

  var resultImc = document.querySelector('#imc-result');
  resultImc.textContent = imc.toFixed(2).replace('.', ',');

  var msg = document.querySelector('#range');
  msg.textContent = range(imc);
  
  

}

function range(imc){
  
  var resultRange = '';

   
    if (imc >= 16 && imc <= 16.9) {
      resultRange = 'Muito abaixo do peso';
    } else resultRange = 'inválido'
    if (imc >= 17 && imc <= 18.4) {
      resultRange = 'Abaixo do peso';
    }
    if (imc >= 18.5 && imc <= 24,9){
      resultRange = 'Peso normal';
    }
    if (imc >= 25  && imc <= 29.9) {
      resultRange = 'Acima do peso';
    }
    if (imc >= 30 && imc <= 34.9) {
      resultRange = 'Obesidade grau I';
    }
    if (imc >= 35 && imc <= 40){
      resultRange = 'Obsidade grau II';
    }
    if (imc > 40) {
      resultRange = 'Obsidade grau III';
    }
    
  return resultRange;
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

start();
