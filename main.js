let bill = document.getElementById('bill');
let numPeople = document.getElementById('num-people');
let inputTip = document.getElementById('inputTip');

function armazena() {
  // Armazena o valor que os inputs recebem
  let inputTipValue = inputTip.value;
  let billValue = bill.value;
  let numpValue = numPeople.value;
  inputTipValue /= 100;
  if (numpValue < 1) {
    numpValue = 1;
  }

  // Faz o calculo do valor da gorjeta, total por pessoa e valor total com gorjeta                               
  let storeAmount = (billValue / numpValue) * (inputTipValue);
  let storeTG = (billValue / numpValue) + storeAmount;
  let storeT = storeTG * numpValue;

  // Escreve os resultados na tela
  document.getElementById('totalG').innerHTML = storeTG.toFixed(2);
  document.getElementById('amount').innerHTML = storeAmount.toFixed(2);
  document.getElementById('total').innerHTML = storeT.toFixed(2);
}

// Reseta todos os campos e resultados
document.getElementById('reset').onclick = function () {
  inputTip.value = '';
  bill.value = '';
  numPeople.value = 1;
  armazena();
};