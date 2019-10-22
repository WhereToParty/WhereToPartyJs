// fetch('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number,photos,opening_hours,formatted_address&key=AIzaSyD1WsGz3uMofJ8Cacw2slA04PWbO430-yY', {mode: 'cors'})
// .then(res => res.json())
// .then((res) => {
//   const data = res.data;
//   getElement('name').innerHTML =  'Name: ' + data.name;
//   getElement('symbol').innerHTML = 'Symbol: ' + data.symbol;
//   getElement('rank').innerHTML = 'Rank: ' + data.rank;
//   getElement('price').innerHTML = 'Price: ' + data.quotes.USD.price;
//   // do the rest here
// });
var jsonMap= 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number,photos,opening_hours,formatted_address&key=AIzaSyD1WsGz3uMofJ8Cacw2slA04PWbO430-yY';

var imageFormat= 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';

//'CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY'
var apiKey= '&key=AIzaSyD1WsGz3uMofJ8Cacw2slA04PWbO430-yY';

var request = new XMLHttpRequest();
var requestImage = new XMLHttpRequest();
//var request = createCORSRequest('GET', jsonMap);
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', jsonMap, true);

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var placeNameVar = document.getElementById('placeName');
  var ratingVar = document.getElementById('ratingValue');
  var openNowVar= document.getElementById('open');
  var horarioVar= document.getElementById('horario');
  var domiVar= document.getElementById('domicilio');
  var phoneVar=document.getElementById('phoneNum')

  placeNameVar.innerHTML=data.result.name;
  ratingVar.innerHTML=data.result.rating;
  openNowVar.innerHTML=data.result.opening_hours.open_now;
  horarioVar.innerHTML=data.result.opening_hours.weekday_text;
  domiVar.innerHTML=data.result.formatted_address;
  phoneVar.innerHTML=data.result.formatted_phone_number;

  var photoReference = data.result.photos[1].photo_reference;
  var res1 = imageFormat.concat(photoReference);
  var res2 = res1.concat(apiKey);
  requestImage.open('GET', res2, true);
  requestImage.onload= function(){
    var dataImage= JSON.parse(this.response);
    var imageBan= document.getElementById('imgBanner');
    imageBan.innerHTML=dataImage;
  }
  requestImage.send();

}

request.send()


// function send request(){
// var jsonLugar='https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number,photos,opening_hours,formatted_address&key=AIzaSyD1WsGz3uMofJ8Cacw2slA04PWbO430-yY'
//
//   var request = new XMLHttpRequest();
//   request.open('GET', jsonLugar , true);
//   request.onload = function() {
//   }
//   request.send();
// }



// function populateHeader(jsonLugar) {
//   // var photos
//   //
//   // var myH1 = document.createElement('h1');
//   // myH1.textContent = jsonLugar['name'];
//   // header.appendChild(myH1);
//   //
//   // var rating= document.createElement('p');
//   // rating.textContent= jsonLugar['rating']
//   // header.appendChild(rating);
//
//
//   var myPara = document.createElement('p');
//   myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//   header.appendChild(myPara);
// }
