const API_KEY ='https://razer-api.onrender.com/devices'
let main4 = document.querySelector('.main4')

async function getApi() {
   const response = await fetch(API_KEY)
   const data = await response.json()
   console.log(data);
   Add(data) 
}

getApi()

function Add(data) {
    let html = ''
    data.slice(60,80).map((el) => {
        html += `
        <div>
           <img src=${el.image} />
           <h1>${el.name}</h1>
        </div>
        `
        main4.innerHTML = html;

    })
}