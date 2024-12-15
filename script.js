const USD = 6.08;
const EUR = 7.36;
const GBP = 8.41;

const form = document.querySelector('form');
const amount = document.getElementById('amount');   
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

amount.addEventListener("input", function() {
    const hasCharactersREgex=/\D+/g
    amount.value = amount.value.replace(hasCharactersREgex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

switch(currency.value) {
    case "USD":
        convertCurrency(amount.value, USD, "US$")
        break;
    case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break;
    case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break;
    default:
        break;
}
}
function convertCurrency(amount,price,symbol) {
    try{
       
        description.textContent = `${symbol} ${formatCurrencyBRL(price)}`

        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")
        result.textContent = `${total} Reais`

footer.classList.add("show-result")
    }catch (error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("Please enter a valid number")
    }
       
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
