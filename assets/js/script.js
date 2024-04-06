const apiKey = "e71afb0d9c51bbc204fe70de6f0dd8ad"
const url = `https://api.openweathermap.org/data/3.0/onecall?appid=${apiKey}`

async function getApi(){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
}

getApi()