const url = 'https://ap-countries-api.vercel.app/all'

async function showCountries(){
    try{
        let response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        let result = await response.json()
        let data = result.data
        // console.log(data);
        let str = ''
        data.map((country)=>{
            str+=`
            <div class="card">
            <img src='${country.flags.png}' alt='${country.flags.alt}'>
            <div class="card__content">
                <h1>${country.name.common}</h1>
                <div class="card__info">
                    <h3>Population: </h3>
                    <p>${country.population}</p>
                </div>

                <div class="card__info">
                    <h3>Region:</h3>
                    <p>${country.region}</p>
                </div>

                <div class="card__info">
                    <h3>Capital:</h3>
                    <p>${country.capital}</p>
                </div>
            </div>
        </div>
            `
        })  
        cardParent.innerHTML = str    
    }catch(err){
        console.log(err)
    }
}

let regionURL = 'https://restcountries.com/v3.1'
showCountries()
let cardParent = document.querySelector('.card__wrapper')

async function sortCountries(fl){
    try{
        let response = await fetch(`${regionURL}/region/${fl}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        let result = await response.json()
        let data = result
        let str = ''
        data.filter((country)=>{
            str+=`
            <div class="card">
            <img src='${country.flags.png}' alt='${country.flags.alt}'>
            <div class="card__content">
                <h1>${country.name.common}</h1>
                <div class="card__info">
                    <h3>Population: </h3>
                    <p>${country.population}</p>
                </div>

                <div class="card__info">
                    <h3>Region:</h3>
                    <p>${country.region}</p>
                </div>

                <div class="card__info">
                    <h3>Capital:</h3>
                    <p>${country.capital}</p>
                </div>
            </div>
        </div>
            `
        }) 
        cardParent.innerHTML = str
    }catch(err){
        console.log(err);
    }
}

// sortCountries('europe')

let option = document.querySelector('#hero-select').value
// let option = cardParent.options[cardParent.selectedIndex].value;

console.log(option);