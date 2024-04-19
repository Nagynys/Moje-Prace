fetch("http://api.open-notify.org/iss-now.json")
    .then( (response) => response.json() )
    .then( (data) => {

        const { latitude, longitude } = data.iss_position

        const latitudeISS = document.getElementById("latitude")
        latitudeISS.textContent = `${latitude}`

        const longitudeISS = document.getElementById("longitude")
        longitudeISS.textContent = `${longitude}`


        const mapa = document.getElementById("mapISS")
        mapa.addEventListener("click", (e) => {
            e.preventDefault()
            const mapUrl= `https://www.google.com/maps/@${latitude},${longitude},5z?entry=ttu`
            window.open(mapUrl, '_blank')
        })
    })


    .catch( (error) => {
        const paragraph = document.createElement("p")
        paragraph.textContent = `Chyba v načítání ${error}`
        document.body.appendChild(paragraph)
    })



































// fetch("http://api.open-notify.org/iss-now.json")
//     .then( (response) => response.json() )
//     .then( data => {

//         const {latitude, longitude} = data.iss_position

//         const latitudeISS = document.getElementById("latitude")
//         latitudeISS.textContent = `${latitude}`

//         const longitudeISS = document.getElementById("longitude")
//         longitudeISS.textContent = `${longitude}`
//     })

//     .catch( (error) => {
//         const paragraph = document.createElement("p")
//         paragraph.textContent = `Chyba při načítání dat z API ${error}`

//         document.body.appendChild(paragraph)   
//     })