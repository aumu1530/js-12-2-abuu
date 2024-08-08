const API_KEY ='https://razer-api.onrender.com/devices'
let main = document.querySelector('.main')

async function getApi() {
   const response = await fetch(API_KEY)
   const data = await response.json()
   console.log(data);
   Add(data) 
}

getApi()

function Add(data) {
    let html = ''
    data.slice(0,20).map((el) => {
        html += `
        <div>
           <img src=${el.image} />
           <h1>${el.name}</h1>
        </div>
        `
        main.innerHTML = html;

    })
}

// status code
// 200 - oxashadi 
// 201 - yangi yo narsa yaralsa 

// status error 

// 404 - topilmadi 
// 401 - royxatdan otmagan 
// 403 - ruhsat berilmagan 
// cors 17 - backend xatosi 
// 500 - serverda xatolik 
