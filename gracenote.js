function getDateYYYYMMDD(){
    const today = new Date();
    const dd = today.getDate();

    const mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    if(mm<10) 
    {
        mm='0'+mm;
    }
    return yyyy + '-' + mm + '-' + dd
}

let theaters
function getLocalTheaters(){
    fetch("http://data.tmsapi.com/v1.1/movies/showings?startDate=" + getDateYYYYMMDD() + "&api_key=syh7qykyctv94cu3rybjna7b&lat=" + Math.round(userLat) + "&lng=" + Math.round(userLon) + "&radius=20",)
    .then(response => {
        return response.json()
    })
    .then(theatJson => {
        theaters = theatJson
        console.log(theaters)
    })
}

/*
Theaters array:
Each item is an object.
Properties:
title
tmsId
topCast (3) [] (actors)
advisories
genres []
holiday
shortDescription
longDescription
releaseDate
runTime (ISO format)
preferredImage{
    width
    height
    uri: 'assets/p15456641_v_v5_ab.jpg' (wherever this is...)
}
showtimes [] each:
    title
    dateTime (ISO format)
    theater {
        id
        name
    }
    ticketURI (for fandango etc)
*/