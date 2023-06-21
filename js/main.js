/* * let money = { "BRL": "Real", "EUR": "Euro", "USD": "Dólar", "JPY": "Iene", "GBP": "Libra Esterlina", "ARS": "Peso Argentino", "CNY": "Yuan" }; */

const input_from_quantity = document.querySelector("#from-quantity");
const select_from_money = document.querySelector("#from-money");
const input_to_quantity = document.querySelector("#to-quantity");
const select_to_money = document.querySelector("#to-money");

const troca = document.querySelector("#swap");
const info = document.querySelector("#info-convert");

const url = 'https://v6.exchangerate-api.com/v6/534c34da323d7fd2ff1cc423/latest/USD'

fetch(url)

troca.addEventListener("click", swap);


function swap() {
  let first = select_from_money.value;
  select_from_money.value = select_to_money.value;
  select_to_money.value = first;
  calculate();
}

