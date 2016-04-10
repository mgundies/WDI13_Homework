$(document).ready(function (){

  var PageNum =1;
  var isOkToSearch = true;
  var searchTerm = "";
  var firstSearch = true;
  var totalPages = 0;
  var photoNum = 0;


  var searchFlickr = function (term, pageToGet) {
    console.log("page to get: " + pageToGet)
    var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: term,
      format: 'json',
      page: pageToGet
    }).done(function(data) {
      console.log(data);
      console.log("page= " + data.photos.page);
      if (firstSearch === true) {
        totalPages = data.photos.pages;
        firstSearch === false;
      };

      isOkToSearch = true; // should be moved inside done ??
      totalPages
      for (var i= 0; i<data.photos.photo.length; i++) {
        photoNum += 1;
        var user_url = generateUserURL(data.photos.photo[i]);
        var url = generateURL(data.photos.photo[i]);
        displayPhoto(url,user_url, photoNum);
      }
    });
  };

  var displayPhoto = function(url,user_url, idNum) {
    console.log(user_url);
    // if (user_url === null) {
    //   var $img = $('<img>', {src: url});
    //   $img.appendTo('#results');
    // }
    // else {
      varID = "XYZ"+idNum;
      hashVarID = "#"+varID;
      var $img = $('<img>', {src: url, id: varID});
      $img.appendTo('#results');
      $(hashVarID).wrap("<a href='" + user_url + "'>");
      // $(hashVarID).appendTo('#results');
    // }
    // var $img = $('<img>', {src: url});
    // $img.wrap("<a href='/Content/pdf/" + data.pdf1 + "'>");
    // $img.appendTo('#results');

  };

  var generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg'
    ].join('');
  };

  var generateUserURL = function (photo) {
    return [
      'https://www.flickr.com/photos/',
      photo.owner,
      '/'
      ].join('');
  };

  $('#search').on('submit', function(e) {
    e.preventDefault();
    var query = $('#query').val();
    $('#results').empty();
    pageNum = 1;
    searchTerm = query;
    isOkToSearch = true;
    firstSearch = true;
    totalPages = 0;
    photoNum = 0;
    searchFlickr(query,pageNum);
  })

  $(window).on('scroll', function() {
    var pixelsFromBottom = $(document).height() - ($(window).scrollTop() + $(window).height())
    if ((pixelsFromBottom < 300) && (isOkToSearch === true) && (pageNum < totalPages )) {
      isOkToSearch = false;
      pageNum += 1;
      searchFlickr(searchTerm,pageNum);
    };
  });

});
