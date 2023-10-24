var map;
async function initMap() {
    // console.log(document.getElementById("map"))
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.931578125338774, lng: -116.97759508856507 },
        zoom: 18,
        fullscreenControl: true,
        streetViewControl: false,
        // mapTypeId: 'satellite',
    });
    console.log(map)
}