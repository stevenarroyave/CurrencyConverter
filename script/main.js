// Johan Steven Ospina Arroyave
// DAT 405 Creative Coding
// Data Visualization
// In this assignment, I use the fixer.io api to fetch the latest exchange rates for Euros and Pounds


        const endpoint = 'http://api.fixer.io/latest';

        const euroField = document.querySelector(".euro");
        const poundField = document.querySelector(".pound");

//create the moneyConvert function, which fetches the most current British Pound to Euro rate
        function moneyConvert(){        //calling the function

                fetch(endpoint)                       //fetching the data
                .then( response => response.json())
                .then(data => {
                    const euroAmount = data.rates.GBP;
                    const euro = euroField.value;
                    const pound = (euro * euroAmount).toFixed(2);
                    poundField.value = pound;
           });
        }

        document.querySelector(".convertButton").addEventListener("click", moneyConvert);
