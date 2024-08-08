const API_KEY ='https://razer-api.onrender.com/devices'
let main5 = document.querySelector('.main5')

async function getApi() {
   const response = await fetch(API_KEY)
   const data = await response.json()
   console.log(data);
   Add(data) 
}

getApi()

function Add(data) {
    let html = ''
    data.slice(80,100).map((el) => {
        html += `
        <div>
           <img src=${el.image} />
           <h1>${el.name}</h1>
        </div>
        `
        main5.innerHTML = html;

    })
}