const form = document.querySelector('.form')
const temp = document.querySelector('.temperatura')
const clima = document.querySelector('.clima')
const umidade = document.querySelector('.umidade')
const velocidadeVento = document.querySelector('.velocidadeVento')
const visibilidade = document.querySelector('.visibilidade')

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    let input = document.querySelector('.cidade')

   await getAPI(input.value)
})


async function getAPI(city){
    const apiKey = "11ecabe574fe4ddb564aa3bf3d75d241"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

getAPI("São Paulo")


async function getData(){
    const iconTemp = `http://openweathermap.org/img/wn/`
}

