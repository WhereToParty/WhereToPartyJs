
function send request(){
var jsonLugar='https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number,photos,opening_hours,formatted_address&key=AIzaSyD1WsGz3uMofJ8Cacw2slA04PWbO430-yY'

  var request = new XMLHttpRequest()
  request.open('GET', jsonLugar , true)
  request.onload = function() {
  }
  request.send()
}


function populateHeader(jsonLugar) {
  var photos +

  var myH1 = document.createElement('h1');
  myH1.textContent = jsonLugar['name'];
  header.appendChild(myH1);

  var rating= document.createElement('p');
  rating.textContent= jsonLugar['rating']
  header.appendChild(rating);


  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}
