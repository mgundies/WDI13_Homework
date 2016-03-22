
var counterButton = document.getElementById('lib-button');
var onButtonClick = function() {
    var libTxt = document.getElementById('person').value
    + " " + document.getElementById('adjective').value
    + " " + document.getElementById('noun').value;

    document.getElementById('story').innerHTML = libTxt;
    //parseInt(counterButton.innerHTML) + 1;
};
counterButton.addEventListener('click', onButtonClick, false);
