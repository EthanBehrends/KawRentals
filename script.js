$(document).ready(function() {
  updateListing();
    $("label[for='price']").html("Max. Price: " + $("input[name='price']").val() + "/month");
  $(".searchInput").on('input',function() {
    $("label[for='price']").html("Max. Price: " + $("input[name='price']").val() + "/month");
    updateListingSet(updateSettings());
  });
  $(".property").on('click', function() {
    console.log("test");
    $(location).attr("href",('/property/index.php?id=' + $(this).attr("propid")));
  });
});

function propertyHTML(property) {
  let html = "<div class='property ";
  if(!property.available) {
    html+= "unavailable";
  }
  html+= "' propId='" + property.id + "'><div class='unav'>Available " + property.dateAvailable + "</div><img class='houseimg' src='" + property.image + "' /><div class='propertydesc'><div class='descheader'><div class='price'>$" + property.rent + "/month</div><div class='specs'>" + property.beds + " Bed | " + property.baths + " Bath</div></div><div class='address'>" + property.address + "</div><div class='desc'>" + property.desc + "</div></div></div>";
  return(html);
}
function addProperty(property) {
  $("#rentals").append(propertyHTML(property));
}
function updateListing() {
  $("#rentals").empty();
  $.getJSON("/assets/properties.json", function(data) {
    for(const property of data) {
      addProperty(property);
    }
    $(".property").on('click', function() {
      console.log("test");
      $(location).attr("href",('/property/index.php?id=' + $(this).attr("propid")));
    });
  });
}
function updateListingSet(set) {
  $("#rentals").empty();
  $.getJSON("/assets/properties.json", function(data) {
    $("#nores").show();
    for(const property of data) {
      if(set.maxPrice >= property.rent && set.minBath <= property.baths && set.minBed <= property.beds) {
        addProperty(property);
        $("#nores").hide();
      }
    }

  });
  $(".property").on('click', function() {
    console.log("test");
    $(location).attr("href",('/property/index.php?id=' + $(this).attr("propid")));
  });
}
function updateSettings() {
  let settings = {
    maxPrice:$("input[name='price']").val(),
    minBath:$("input[name='bath']:checked").val(),
    minBed:$("input[name='bed']:checked").val()
  }
  if(!$("input[name='bath']:checked").val()) {
    settings.minBath = 0;
  }
  if(!$("input[name='bed']:checked").val()) {
    settings.minBed = 0;
  }
  return(settings);
}
