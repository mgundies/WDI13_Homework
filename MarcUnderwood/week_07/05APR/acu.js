// http://content.guardianapis.com/search?
// from-date=2016-04-01
// &page=2
// &q=rugby
// &api-key=d64f753b-b4f3-4d1d-961b-05c84e0cc7ee

// http://content.guardianapis.com/search?
// from-date=2016-04-01
// &page=2
// &q=rugby
sKey = "&api-key=d64f753b-b4f3-4d1d-961b-05c84e0cc7ee"
gMapKey = "AIzaSyB32mEDd7-dhwbIOHSh8E5TlioKl403o7k"

function initMap(t)  {
 // Create the map.
 var map = new google.maps.Map(document.getElementById('map'), {
   zoom: 4,
   center: {lat: 37.090, lng: -95.712},
   mapTypeId: google.maps.MapTypeId.TERRAIN
 });

 // Construct the circle for each value in citymap.
 // Note: We scale the area of the circle based on the population.
 for (var city in citymap) {
   // Add the circle for this city to the map.
   var cityCircle = new google.maps.Circle({
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35,
     map: map,
     center: citymap[city].center,
    //  radius: Math.sqrt(citymap[city].population) * 100
     radius: Math.sqrt(citymap[city].numArticles[t]) * 4000,

   });

 }
}

//
// function loadjscssfile(filename){
//         var fileref=document.createElement('script');
//         fileref.setAttribute("type","text/javascript");
//         fileref.setAttribute("src", filename);
//         document.getElementsByTagName("head")[0].appendChild(fileref);
//         initMap();
//         console.log(filename);
//
// }
// var myObj = function(){
//     this.property = 'foo';
//     this.bar = function(){
//     }
// }
// myObj.prototype.objProp = true;
// var newObj = new myObj();
//

  // This example creates circles on the map, representing populations in North
       // America.

       // First, create an object containing LatLng and population for each city.
var citymap = {
  0: {
    name: "chicago",
    center: {lat: 41.878, lng: -87.629},
    population: 2714856,
    numArticles: []
  },
  1: {
    name: "new york",
    center: {lat: 40.714, lng: -74.005},
    population: 8405837,
    numArticles: []
  },
  2: {
    name: "los angeles",
    center: {lat: 34.052, lng: -118.243},
    population: 3857799,
    numArticles: []
  },
  3: {
    name: "vancouver",
    center: {lat: 49.25, lng: -123.1},
    population: 603502,
    numArticles: []
  }
};

// loadjscssfile("https://maps.googleapis.com/maps/api/js?key=AIzaSyB32mEDd7-dhwbIOHSh8E5TlioKl403o7k");


$(document).ready(function () {

  yearStart = 1999;
  numYears = 5;
  for (var i = 0; i < numYears; i++) {
    startDate = (yearStart + i) + "-01-01";
    endDate = (yearStart + i + 1) + "-01-01";
    var fromDate = "from-date=" + startDate;
    var toDate = "&to-date=" + endDate;
    $.each(citymap, function(index, value) {
      var subject = "&q=" + citymap[index].name;
      var searchURL = 'http://content.guardianapis.com/search?' + fromDate + toDate + subject + sKey;

      $.ajax(searchURL).done(function(data) {

          citymap[index]["numArticles"][i] = data['response']['total'];
          window.setTimeout(initMap(i), 10000)
          console.log(citymap[index]["numArticles"][i]);
          // console.log(data['response']['total']);
          initMap(i);
      });
    });
  };
});

// setInterval(p=h=>{for(p[I++*I%17+578]=i=89;i++<630;h+=i%30?"`*"[p[i]=p[i]+p[i+1]+p[i+29]+p[i+30]>>2]||8:"\n");console.log(h)},I=30);

//   $.ajax(movieURL, {
//     success: function(data) {
//       console.log(data);
//     },
//     error: function (data) {
//       alert("basdf");
//    }
//  })
