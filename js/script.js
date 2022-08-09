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
  msg.textContent = range(imc.toFixed(1));
  
  

}

function range(imc){
  
  var resultRange = '';

  console.log(parseFloat(imc))


  if (parseFloat(imc) < 16) {
    resultRange = 'inválido';
  }   
  if (parseFloat(imc) >= 16 && parseFloat(imc) <= 16.9) {
    resultRange = 'Muito abaixo do peso';
  } 
  if (parseFloat(imc) >= 17 && parseFloat(imc) <= 18.4) {
    resultRange = 'Abaixo do peso';
  }
  if (parseFloat(imc) >= 18.5 && parseFloat(imc) <= 24.9){
    resultRange = 'Peso normal';
  }
  if (parseFloat(imc) >= 25  && parseFloat(imc) <= 29.9) {
    resultRange = 'Acima do peso';
  }
  if (parseFloat(imc) >= 30 && parseFloat(imc) <= 34.9) {
    resultRange = 'Obesidade grau I';
  }
  if (parseFloat(imc) >= 35 && parseFloat(imc) <= 40){
    resultRange = 'Obsidade grau II';
  }
  if (parseFloat(imc) > 40) {
    resultRange = 'Obsidade grau III';
  }
    
  return resultRange;
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

start();
