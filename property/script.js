$(document).ready(function() {
  prop = returnProperty();
  prop.then(x => {
    prop = x;
    initMap();
    renderImages();
    fillInfo();
  });
});
const apiKey = "AIzaSyDKkm-fXXDQ2lVQXDEHAVWu-oMhnKmtMrk";
let prop ={lat: -34.397, lng: 150.644};
async function returnProperty() {
  let data = await getProperty(GetURLParameter("id"));
  return(data);
}
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}
function getProperty(id) {
  return new Promise(resolve => {
    $.getJSON("../assets/properties.json", function(data) {
      for(const property of data) {
        if(property.id == id) {
          resolve(property);
        }
      }
      resolve("No property found.");
    });
  });
}
function initMap() {
  var map;
  var marker;
  console.log(prop.lat + " " + prop.lng);
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: prop.lat, lng: prop.lng},
    zoom: 15,
    mapTypeId: 'hybrid',
    labels: true
  });
  marker = new google.maps.Marker({
    position: {lat: prop.lat, lng: prop.lng},
    map: map
  });
}
function renderImages() {
  $("#imageCont").css('background-image', 'url(../' + prop.image + ')');
}
function goBack() {
  window.history.back();
}
function fillInfo() {
  $("#a").text(prop.address);
  $("#p").text("$" + prop.rent + "/month");
  $("#bedbath").text(prop.beds + " Bed | " + prop.baths + " Bath");
  $("#description").text(prop.desc);
  $("#available").text("Available " + prop.dateAvailable);
}
