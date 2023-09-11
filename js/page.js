const url = 'https://ap-countries-api.vercel.app/all'

async function showDetails(id){
    try{
        let response = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        let result = await response.json()
        let data = result.data
        displayCars(data)
        // console.log(data);  
        showCountries()
        cardParent.innerHTML = str    
    }catch(err){
        console.log(err)
    }
}

async function getCarDetails(id) {
    try {
      let res = await fetch(`${url}/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      let data = await res.json();
      // console.log(data);
      displayCarDetails(data);
    } catch (err) {
      console.log(err);
    }
  }

  let id = JSON.parse(localStorage.getItem('carId'));
getCarDetails(id);

function displayCarDetails(car) {
  document.querySelector('.car').innerHTML = `<h2>${car.id}. ${car.name}</h2>`;
}