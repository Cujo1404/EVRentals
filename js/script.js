var vehicles = [
  {
    id: 101,
    color : 'White',
    name: "Leaf",
    company: "Nissan",
    type: "car",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 5,
    seats: 4,
    cost : 129,
    fuel : 8.5,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 10,
    photo : '2020-Nissan-Nissan-LEAF-SV-Plus-2-source-e1578666326115.jpg',
    description : 'Get the best of both worlds with instant acceleration and surprising power alongside an effortless, ' +
    'quiet drive performance — all with zero exhaust emissions. ' +
    'Command the road with every twist and turn, as LEAF’s low centre of gravity ensures ultra-smooth handling.  ' +
    'Its a driving experience unlike any other.',
    tagWords : ['leaf', 'nissan', 'car', 'hatchback', '5 seater','japan', 'white', 'europe','north america','19th century']

  },

  {
    id: 102,
    name: "i3",
    company: "BMW",
    type: "car",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 5,
    seats: 4,
    color : 'blue',
    cost : 129,
    fuel : 8.5,
    minPeople: 1,
    maxPeople: 2,
    minDay: 1,
    maxDay: 10,
    photo : 'BMW_i3.jpg',
    description : 'Get in and experience the future at your fingertips. The BMW i3 is full of innovative  ' +
    'technologies it can use to confidently master your day-to-day life. It connects you to the  ' +
    'outside world, updates you about whats going on, keeps you organised, and takes you  ' +
    'as far as you want to go. It is always ready for the road and to explore new avenues. With ' +
    'style and a trend-setting design for electrifying driving pleasure.',
    tagWords : ['BMW', 'i3', 'car', 'hatchback', '2 seater','euro', 'blue', 'europe','north america','19th century']
  },

  {
    id: 104,
    name: "Model 3",
    company: "Tesla",
    type: "car",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 5,
    seats: 4,
    color : 'blue',
    cost : 129,
    fuel : 8.5,
    minPeople: 1,
    maxPeople: 2,
    minDay: 1,
    maxDay: 10,
    photo : 'Tesla_ModelS.png',
  },
  {
    id: 104,
    name: "Zoe",
    company: "Renault",
    type: "car",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 5,
    seats: 4,
    minPeople: 1,
    maxPeople: 2,
    minDay: 1,
    maxDay: 10,
    cost: 129,
    fuel: 8.5,
    photo: "Renault_Zoe.png",
  },

  {
    id: 201,
    name: "Model X",
    company: "Tesla",
    type: "SUV",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 5,
    seats: 7,
    minPeople: 1,
    maxPeople: 5,
    minDay: 3,
    maxDay: 10,
    cost: 144,
    fuel: 9.7,
    photo: "Tesla_ModelX.png",
  },

  {
    id: 202,
    name: "Niro",
    company: "Kia",
    type: "SUV",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 5,
    seats: 7,
    minPeople: 1,
    maxPeople: 5,
    minDay: 3,
    maxDay: 10,
    cost: 144,
    fuel: 9.7,
    photo: "Kianiro.jpeg",
  },

  {
    id: 203,
    name: "ZS",
    company: "MG",
    type: "SUV",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 5,
    seats: 7,
    minPeople: 1,
    maxPeople: 5,
    minDay: 3,
    maxDay: 10,
    cost: 144,
    fuel: 9.7,
    photo: "MGZS.jpeg",
  },

  {
    id: 204,
    name: "Kona",
    company: "Hyundai",
    type: "SUV",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2019",
    doors: 5,
    seats: 7,
    minPeople: 1,
    maxPeople: 5,
    minDay: 3,
    maxDay: 10,
    cost: 144,
    fuel: 9.7,
    photo: "Hyundai-Kona-Electric-red.jpeg",
  },

  {
    id: 301,
    name: "E-Transit",
    company: "Ford",
    type: "Motor home",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2022",
    doors: 3,
    seats: 8,
    minPeople: 2,
    maxPeople: 6,
    minDay: 2,
    maxDay: 15,
    cost: 200,
    fuel: 17,
    photo: "ETransit.jpeg",
  },

  {
    id: 302,
    name: "Kombi",
    company: "Volkswagon",
    type: "Motor home",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 3,
    seats: 8,
    minPeople: 2,
    maxPeople: 6,
    minDay: 2,
    maxDay: 15,
    cost: 200,
    fuel: 17,
    photo: "id_buzz_concept_7399-2.jpg",
  },

  {
    id: 303,
    name: "EV80",
    company: "LDV",
    type: "Motor home",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2019",
    doors: 3,
    seats: 8,
    minPeople: 2,
    maxPeople: 6,
    minDay: 2,
    maxDay: 15,
    cost: 200,
    fuel: 17,
    photo: "LDVev80.png",
  },

  {
    id: 304,
    name: "eNV200",
    company: "Nissan",
    type: "Motor home",
    trans: "Automatic",
    motor: "Electric Vehicle",
    year: "2020",
    doors: 3,
    seats: 8,
    minPeople: 2,
    maxPeople: 6,
    minDay: 2,
    maxDay: 15,
    cost: 200,
    fuel: 17,
    photo: "NissanEV200.png",
  },

  {
    id: 401,
    name: "Livewire",
    company: "Harley Davidson",
    type: "Motorbike",
    trans: "Manual",
    motor: "Electric Vehicle",
    year: "2019",
    seats: 2,
    minPeople: 1,
    maxPeople: 1,
    minDay: 1,
    maxDay: 5,
    cost: 109,
    fuel: 3.7,
    photo: "19_HD LiveWire_8.jpg",
  },

  {
    id: 402,
    name: "SR/F",
    company: "Zero",
    type: "Motorbike",
    trans: "Manual",
    motor: "Electric Vehicle",
    year: "2020",
    seats: 2,
    minPeople: 1,
    maxPeople: 1,
    minDay: 1,
    maxDay: 5,
    cost: 109,
    fuel: 3.7,
    photo: "best-electric-motorcycles-2021-luxury-Zero-SR-F-luxe-digital@2x.jpeg",
  },

  {
    id: 403,
    name: "Vector",
    company: "Arc",
    type: "Motorbike",
    trans: "Manual",
    motor: "Electric Vehicle",
    year: "2016",
    seats: 2,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 5,
    cost: 109,
    fuel: 3.7,
    photo: "best-electric-motorcycles-2021-luxury-Arc-Vector-luxe-digital@2x.jpeg",
  },

  {
    id: 404,
    name: "LS-218",
    company: "Lightning",
    type: "Motorbike",
    trans: "Manual",
    motor: "Electric Vehicle",
    year: "2020",
    seats: 2,
    minPeople: 1,
    maxPeople: 1,
    minDay: 1,
    maxDay: 5,
    cost: 109,
    fuel: 3.7,
    photo: "best-electric-motorcycles-2021-luxury-Lightning-LS-218-luxe-digital@2x.jpeg",
  },
];

////  ARRAYS END HERE   ////

var script =
  '<script src="https://maps.googleapis.com/maps/api/js?key=' +
  key +
  '&callback=initMap&libraries=places&v=weekly" async defer></script>';

/////  INPUT VALIDATOR  ////

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

///  CLICK FUNCTIONS  /////

$(".resultsPage").hide();
$("#bookingAddress").hide();

$(document).ready(function () {
  $("body").append(script);

  $("#vechicleSearchBtn").click(function () {
    $("#searchInputs").hide();
    $("#going").hide();
    $(".viewButton").hide();
    $(".resultsPage").show();
  });
});


// form next

$('.step2, .step3, .step4, .step5, .step6').hide();

$('.nextButton1').click(function(){
  $('.step1').hide();
  $('.step2').show();
});

$('.nextButton2').click(function(){
  $('.step2').hide();
  $('.step3').show();
});
$('.nextButton3').click(function(){
  $('.step3').hide();
  $('.step4').show();
});
$('.nextButton4').click(function(){
  $('.step4').hide();
  $('.step5').show();
});
$('.nextButton5').click(function(){
  $('.step5').hide();
  $('.step6').show();
});

$('.main2, .main3, .details, .fleetContainer').hide();

$('.block').click(function(){
  $('.main2').show();
  $('.main3').show();
  $('.fleetContainer').show();
  $('.block').hide();
});

$('.top').click(function(){
  $('.main2').hide();
  $('.main3').hide();
  $('.fleetContainer').hide();
  $('.block').show();
});
////     INITMAP     /////

function initMap() {
  var  days, people ;
  ////      Date calculation     ////

  $('#pickupDate').datepicker({
    dateFormat : 'yy-mm-dd',
    changeMonth : true,
    minDate :new Date(),
    maxDate : '+1y',
    onSelect : function(date){
      var selectDate = new Date(date);
      var msecInADay  = 86400000;
      var stDate = new Date(selectDate.getTime() + msecInADay);
  
      $('#dropoffDate').datepicker('option', 'minDate', stDate);
      var enDate = new Date(selectDate.getTime() + 10 * msecInADay);
  
      $('#dropoffDate').datepicker('option', 'maxDate', enDate);
  
    }
  
  });
  
  $('#dropoffDate').datepicker({
    dateFormat : 'yy-mm-dd',
    changeMonth : true
  });

  $("#vechicleSearchBtn").click(function () {
    dateDiff();
  });

  function dateDiff() {
    
    var start = $('#pickupDate').datepicker("getDate");
    var end = $('#dropoffDate').datepicker("getDate");

    days = (end - start) / 1000 / 60 / 60 / 24; //to get human readable days

    people = parseInt($("#noOfPeoples").val());
  }

  ////     AUTOCOMPLETE       ////

  var start = new google.maps.places.Autocomplete(
    document.getElementById("pickup"),
    {
      types: ["(cities)"],
    }
  ); //autocomplete start_address

  var wayPoints = new google.maps.places.Autocomplete(
    document.getElementById("wayPoints"),
    {
      types: ["(cities)"],
    }
  ); //autocomplete WAYPOINT_address

  var end = new google.maps.places.Autocomplete(
    document.getElementById("dropoff"),
    {
      types: ["(cities)"],
    }
  ); //autocomplete end_address

  ////       Directions distance and duration       /////
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  ////   Callilng map from directions           /////
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 41.85, lng: -87.65 },
    mapTypeId: "satellite",
  }); //map

  directionsRenderer.setMap(map);

//   document.getElementById("viewButton").addEventListener("click", () => {
//     var i;
//     for (i = 0; i < 5; i++) {
//  {
//         displayCards(i);
//       }
//     } //for
//   }); //vehicleSearchBtn

  document.getElementById("vechicleSearchBtn").addEventListener("click", () => {
    var i;
    for (i = 0; i < vehicles.length; i++) {
      if (
        days <= vehicles[i].maxDay &&
        days >= vehicles[i].minDay &&
        people <= vehicles[i].maxPeople &&
        people >= vehicles[i].minPeople
      ) {
        displayCards(i);
      }
    } //for
  }); //vehicleSearchBtn

  function displayCards(j) {
    $("#results").append(
      '<div class="card mb-3">' +
        '<div class="row no-gutters clearfix">' +
        '<div class="col-md-5">' +
        '<img src="images/' +
        vehicles[j].photo +
        '" class="card-img" alt="..."> </div>' +
        '<div class="col-md-7">' +
        '<div class="card-body row no-gutters">' +
        '<div class="col-12 mb-3">' +
        '<h4 class="card-title d-inline mr-2">' +
        vehicles[j].company +
        "</h4>" +
        '<h4 class="card-title d-inline mr-2">' +
        vehicles[j].name +
        "</h4>" +
        '<h4 class="card-title d-inline">' +
        vehicles[j].year +
        "</h4>" +
        "</div>" +
        '<h6 class="card-title col-6">' +
        vehicles[j].trans +
        "</h6>" +
        '<h6 class="card-title col-6">' +
        vehicles[j].motor +
        "</h6>" +
        '<h6 class="card-title col-6">$' +
        vehicles[j].cost +
        "/Day</h6>" +
        '<h6 class="card-title col-6">' +
        vehicles[j].fuel +
        "L/100Km</h6>" +
        '<div class="col-12 text-right mt-5 mb-2">' +
        '<p class="d-inline mr-2">Total:</p>'+
        '<h4 id="cost' +
        j +
        '" class="d-inline"></h4>' +
        "</div>" +
        '<button id=" ' +
        vehicles[j].id +
        '" href="#" class=" btn btn-primary btn-block getQuote" onclick="getQuote()">Book Now</button>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    ); // append ends here

    calculateAndDisplayRoute(
      j,
      directionsService,
      directionsRenderer,
      days,
      vehicles[j].cost,
      vehicles[j].fuel
    );
  } //displayCards
} //// initMap END HERE ////

//distance
function calculateAndDisplayRoute(
  index,
  directionsService,
  directionsRenderer,
  d,
  cost,
  fuel
) {
  var wayPts = [];
  wayPts.push({
    location: document.getElementById("wayPoints").value,
    stopover: true,
  });

  return directionsService.route(
    {
      origin: document.getElementById("pickup").value,
      destination: document.getElementById("dropoff").value,
      waypoints: wayPts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        

        directionsRenderer.setDirections(response);
        const route = response.routes[0];
        const summaryPanel = document.getElementById("directionsPanel");

        summaryPanel.innerHTML = "";
        var grandFuel = 0;
        var rental = d * cost;
        

        // For each route, display summary information.
        for (let i = 0; i < route.legs.length; i++) {
          const routeSegment = i + 1;
          summaryPanel.innerHTML +=
            "<b>Route Segment: " + routeSegment + "</b><br>";
          summaryPanel.innerHTML += route.legs[i].start_address + " to ";
          summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
          summaryPanel.innerHTML +=
            route.legs[i].distance.text +
            " and it takes " +
            route.legs[i].duration.text +
            " to reach." +
            "<br><br>";

          var fuelCost =
            (parseInt(route.legs[i].distance.text) / 100) * parseInt(fuel) * 2;
          grandFuel += fuelCost;
        }

        grandTotal = rental + grandFuel;

        $("#cost" + index).text("$ " + grandTotal.toFixed(2));
        return grandTotal;
      } else {
        window.alert("Directions request failed due to " + status);
        $("#cost" + index).text("NA");
        return grandTotal;
      }
    }
  );
}

function getQuote() {
  $("#bookingAddress").show();
  $(".resultsPage").hide();
}

$("#bookNow").click(function () {
  swal({
    text: '<img src="../images/EV_Rentals_logo.png" alt="EV Rentals logo" style="width:250px;">',
    html: 'true',
    title: 'Sweet, All Booked!',
    text: 'Your booking is under control, check your email for confirmation.',
    imageUrl: '../images/EV_Rentals_logo.png',
    imageWidth: 250,
    imageHeight: 50,
    imageAlt: 'EV Rentals Logo',
  });
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}