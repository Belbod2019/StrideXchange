document.getElementById('exchange-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Your API key (replace with your actual API key)
    const apiKey = 'YOUR_API_KEY';
    
    try {
        // Fetch the exchange rate from the API
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
        const data = await response.json();
        
        if (data.result === 'success') {
            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = amount * rate;
            document.getElementById('conversion-output').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
            document.getElementById('conversion-output').textContent = 'Error retrieving exchange rates. Please try again later.';
        }
    } catch (error) {
        document.getElementById('conversion-output').textContent = 'Error retrieving exchange rates. Please try again later.';
    }
});

// Initialize the calendar
$(document).ready(function() {
    $('#calendar-widget').fullCalendar({
        defaultView: 'month',
        editable: true
    });
});
