const dollarContainer = document.getElementById('dollar');
const usdAmount = document.getElementById('usd-amount');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => displayData(data));

const displayData = data => {
    const usd = data.bpi.USD.rate_float;
    usdAmount.textContent = `$${usd} USD`;
    const totalDollarItems = Math.trunc(usd / 1000);
    for(let i = 0; i < totalDollarItems; i++) {
        const newDollar = document.createElement('div');
        newDollar.setAttribute("style", `animation-delay:.${10 + i}s;`);
        newDollar.textContent = '$';
        newDollar.setAttribute('class', 'coin dollar-item');
        dollarContainer.appendChild(newDollar);
    } 
}