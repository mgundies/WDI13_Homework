var basicSearch = function () {
  // console.log("test");
  var searchStr = document.getElementById('searchValue').value;
  searchStr = "http://omdbapi.com/?s=" + searchStr
  // var searchStr = "http://omdbapi.com/?t=" & document.getElementById('searchValue').text;
  // console.log(searchStr);
  var request = new XMLHttpRequest();
  request.open('GET', searchStr);
  request.send();
  request.onreadystatechange = function () {
      if (request.readyState !== 4) {
        return;
      }
      // debugger;

      var content = document.getElementById('content');
      // content.innerHTML = request.responseText;
      var info = JSON.parse(request.responseText);
      // console.log(info);

      for (var i = 0; i < info.Search.length; i++) {
        // div.appendChild(info.Search
          var newP = document.createElement('p');
          newP.id = "link" + i;
          newP.textContent = info.Search[i].Title;
          // console.log(info.Search[i].Title);
          newP.onclick = secondSearch;
          document.getElementById('result').appendChild(newP);
      };
    };
};


var secondSearch = function () {
  // console.log(this.innerText);
  var searchStr2 = "http://omdbapi.com/?t=" + this.innerText;
  console.log(searchStr2);
  // var searchStr = "http://omdbapi.com/?t=" & document.getElementById('searchValue').text;
  var request2 = new XMLHttpRequest();
  request2.open('GET', searchStr2);
  request2.send();
  request2.onreadystatechange = function () {
      if (request2.readyState !== 4) {
        return;
      }
      // debugger;
      var info2 = JSON.parse(request2.responseText);
      console.log(info2);
      var img2 = new Image();
      img2.src = info2.Poster;
      var div2 = document.getElementById('poster');
      img2.onload = function() {
        div2.appendChild(img2);
      };
    };
};


      // img.src = info.Poster;
      // content.innerHTML = info.Title;
      // content.innerHTML = info.Plot;



// request.onreadystatechange = function () {
//   var DONE = 4; // readyState 4 means the request is done.
//   var OK = 200; // status 200 is a successful return.
//   if (request.readyState === DONE) {
//     if (request.status === OK) {
//       console.log(request.responseText); // 'This is the returned text.'
//     } else {
//       console.log('Error: ' + request.status); // An error occurred during the request.
//     }
//   }
// };

// setTimeout(function() {
//   console.log(request.responseText);
// },2000);
