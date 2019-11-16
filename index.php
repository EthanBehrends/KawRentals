<?php
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kaw Rentals</title>
    <link rel="stylesheet" type="text/css" href="styles.css"></link>
    <script src="assets/jquery.min.js"></script>
    <script src="script.js"></script>
  </head>
  <body>
    <div id="landing">
      <div id="navigation">
        <div>
          <a href="/contact/index.html">Contact</a>
          <a href="#rentals">View Rentals</a>
        </div>
      </div>
      <div id="title">
        <img src="/assets/logo-01.png" />
      </div>
  </div>
  <div id="searchbar">
    <div id="price" class="searchInput">
      <label for="price">Max. Price: </label>
    <input type="range" min="500" max="10000" value="8000" step="100"name="price"></input>
  </div>
    <div id="bed" class="searchInput" >
      <label for="bed">Min. beds</label>
      <div class="buttons">
      <input type="radio" name="bed" id="b1" value="1"></input>
      <label for="b1">1</label>
      <input type="radio" name="bed" id="b2" value="2"></input>
      <label for="b2">2</label>
      <input type="radio" name="bed" id="b3" value="3"></input>
      <label for="b3">3</label>
      <input type="radio" name="bed" id="b4" value="4"></input>
      <label for="b4">4</label>
    </div>
    </div>


    <div id="bath" class="searchInput" >
      <label for="bath">Min. baths</label>

      <div class="buttons">
      <input type="radio" name="bath" id="a1" value="1"></input>
      <label for="a1">1</label>
      <input type="radio" name="bath" id="a2" value="2"></input>
      <label for="a2">2</label>
      <input type="radio" name="bath" id="a3" value="3"></input>
      <label for="a3">3</label>
      <input type="radio" name="bath" id="a4" value="4"></input>
      <label for="a4">4</label>
    </div>
    </div>
  </div>
  <h1 id="nores" style="display:none;">No results match your search query. Try adjusting your parameters.</h1>
    <div id="rentals">

    </div>
    <div id="loading" style="display:none;">
      <div id="load">

      </div>
    </div>
  </body>
</html>
