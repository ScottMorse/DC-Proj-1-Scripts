let userLat
let userLon

const geoOptions = {
    enableHighAccuracy: true, 
    maximumAge        : 600000, 
    timeout           : 300000,
}

let watchID
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(geoSuccess,geoError,geoOptions)
    watchID = navigator.geolocation.watchPosition(geoSuccess,geoError,geoOptions)
} 
else {
    console.log('Geolocation is not available on this browser.')
}

function geoSuccess(position){
    userLat = position.coords.latitude
    userLon =  position.coords.longitude
    console.log(position.coords.latitude, position.coords.longitude)
}

function geoError(){
    console.error("Geolocation error.")
    if(userLat && userLon){
        console.warn("Despite geolocation error, location data still available.")
    }
}