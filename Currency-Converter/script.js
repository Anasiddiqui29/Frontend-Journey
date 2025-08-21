const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json"

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const msg = document.querySelector(".msg")

// adding all countries to the dropdown option
for(let select of dropdowns)
{
    for(currCode in countryList)
    {
        let newOption = document.createElement("option"); //create another div 
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "From" && currCode === "USD")
        {
            newOption.selected = "selected";
        }
        else if(select.name === "To" && currCode === "PKR")
        {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    document.addEventListener("change" , (evt) => {
        updateFlag(evt.target)
    });
}

// to update the flag along with the options
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode]; //PK , IN , US ...
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png` ;
    let newimg = element.parentElement.querySelector("img");
    newimg.src = newSrc ;
}

btn.addEventListener("click" ,async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amt = amount.value ; 
    if(amt === "" || amt < 1)
    {
        amt = 1 ; 
        amount.value = "1";
    }

    let response = await fetch("https://latest.currency-api.pages.dev/v1/currencies/eur.json");
    let data = await response.json();

    let fromCurr = document.querySelector(".from select").value;
    let toCurr = document.querySelector(".to select").value; 

    let fromRate = data.eur[fromCurr.toLowerCase()];
    let toRate   = data.eur[toCurr.toLowerCase()];

    console.log(fromRate);
    console.log(toRate);

    let finalAmt = (amt / fromRate) * toRate;

    msg.innerText = `${amt} ${fromCurr} = ${finalAmt} ${toCurr}`;
});
