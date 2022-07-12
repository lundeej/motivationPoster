var quoteDiv = document.querySelector("#quote"); 
var imageDiv = document.querySelector("#image"); 
var useFilter = true; //temporary variable; will use a checkbox/button/etc in final product

//creating temp quote variable
var tempQuote = "This is the quote we are going to use for testing purposes!";
console.log('Checking for filter on/off');

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
        tempQuote = data.quote;

        //adding in the filter check here
        if(useFilter){
          console.log('Filter is turned on. Initiating filter');
          quoteFilter(tempQuote);
        }

        quoteDiv.textContent = data.quote           
      });
  }
  getApi();

  function getImage() {
    var requestUrl = 'https://picsum.photos/200/300'; 

    fetch(requestUrl)
    .then(function (response) {
      console.log(response.url); 
      return response.blob();
    })
    .then(function (data){
      console.log(data); 

      imageDiv.src = URL.createObjectURL(data); 

    }); 
  }
  getImage(); 

  //code for the filter
  function quoteFilter(quote){
    var wordFilter = ["big", "bad", "words"];
    var isGood = true; //boolean to see if quote is good or bad

    //making a loop to compare our quote to the filter
    for(let i = 0; i < wordFilter.length; i++){
        if(quote.toLowerCase().includes(wordFilter[i].toLowerCase())){
            console.log(wordFilter[i]);
            isGood = false;
            console.log(isGood);
        }
    }

    if(isGood){
        console.log('All clear!');
    } else{
      getApi();
    }
}
