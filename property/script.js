$(document).ready(function() {
  prop = returnProperty();
  prop.then(x => prop = x);
});
const apiKey = "AIzaSyDKkm-fXXDQ2lVQXDEHAVWu-oMhnKmtMrk";
let prop ="No property data";
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
