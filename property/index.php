<?php
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kaw Rentals</title>
    <link rel="stylesheet" type="text/css" href="../styles.css"></link>
    <script src="../assets/jquery.min.js"></script>
    <script src="script.js"></script>
    <script>

      function initMap() {
        var map;
        var marker;
        var marker2;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
        marker = new google.maps.Marker({
          position: {lat: -34.397, lng: 150.644},
          map: map
        });
        marker2 = new google.maps.Marker({
          position: {lat: -34.5, lng: 150.644},
          map: map
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKkm-fXXDQ2lVQXDEHAVWu-oMhnKmtMrk&callback=initMap"
    async defer></script>
  </head>
  <body>
    <div id="propContainer">
      <div id="mapCont">
        <div id="map">

        </div>

      </div>
    </div>
  </body>
</html>
