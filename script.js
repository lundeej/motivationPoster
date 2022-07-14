var quoteDiv = document.querySelector("#quote"); 
var imageDiv = document.querySelector("#image"); 
var useFilter = true; //temporary variable; will use a checkbox/button/etc in final product

//creating temp quote variable
var tempQuote = "This is the quote we are going to use for testing purposes!";
console.log('Checking for filter on/off');

// generate button 
var generatePoster; 
var generateBtn = document.querySelector(".modalTrigger"); 

generatePoster = generateBtn.addEventListener('click', function() {
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
  
          quoteDiv.textContent = '"' + data.quote + '" - Kanye West'           
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
})

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

//Trigger Modal 
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.modalTrigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

function returnText(){
  
}

