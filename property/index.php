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
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKkm-fXXDQ2lVQXDEHAVWu-oMhnKmtMrk&callback=initMap"
    async defer></script>
  </head>
  <body>
    <div id="propContainer">
      <div id="imageMapCol">
        <div id="imageCont">

        </div>
        <div id="mapCont">
          <div id="map">

          </div>

        </div>
      </div>
      <div id="descCont">
        <div id="propNav">
          <div id="back" onclick="goBack()">
          </div>
          <div id="priceAddress">
            <div class="poa" id="a">
              Address
            </div>
            <div class="poa" id="p">
              Price
            </div>
          </div>
        </div>
        <div id="bedbath">
          X Bed | X Bath
        </div>
        <div id="description">
          No description found.
        </div>
        <div id="available">

        </div>
        <div id="apply">
          Apply Now
        </div>
      </div>
    </div>
  </body>
</html>
