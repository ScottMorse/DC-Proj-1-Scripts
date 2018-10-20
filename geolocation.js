let userLat
let userLon

const geoOptions = {
    enableHighAccuracy: true, 
    maximumAge        : 600000, 
    timeout           : 300000,
}

navigator.geolocation.getCurrentPosition(geoSuccess,geoError,geoOptions)

let watchID
if ("geolocation" in navigator) {
    watchID = navigator.geolocation.watchPosition(geoSuccess,geoError,geoOptions)
} 
else {
    console.log('Geolocation is not available on this browser.')
}

let mapImgSrc
function geoSuccess(position){
    userLat = position.coords.latitude
    userLon =  position.coords.longitude
    console.log(position.coords.latitude, position.coords.longitude)
    // mapImgSrc = "https://maps.googleapis.com/maps/api/staticmap?center=" + userLat + "," + userLon + "&zoom=13&size=300x300&sensor=false"
    // const newImg = document.createElement('img')
    // newImg.src = mapImgSrc
    // document.body.appendChild(newImg)
}

function geoError(){
    console.log("Geolocation error.")
    if(userLat && userLon){
        console.log("However, location data still available.")
    }
}