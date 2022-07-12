var quoteDiv = document.querySelector("#quote");
var imageDiv = document.querySelector("#image");

// Get Kanye API 
function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.kanye.rest/';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.quote)
      quoteDiv.textContent = '"' + data.quote + '"';
    });
}
getApi();

function getImage() {
  var requestUrl = 'https://picsum.photos/600/450';

  fetch(requestUrl)
    .then(function (response) {
      console.log(response.url);
      return response.blob();
    })
    .then(function (data) {
      console.log(data);

      imageDiv.src = URL.createObjectURL(data);

    });
}
getImage(); 