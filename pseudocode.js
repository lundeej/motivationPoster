//Pseudocode for the profanity filter
// We need to create a profanity filter so that when the user selects the "PG" option, all quotes will be "family-friendly" with no "bad words" that we designate

// Steps to make this work:
// 1. Check whether or not to use filter 
// 2. Get quote from API
// 3. Compare words in the quote to our filter
// 4. If there ARE words that match the filter, get a new quote (possible option to replace word with some other word?)
// 5. If there ARE NO words that match filter, carry on as normal
// 
// Optional steps to explore in the future:
// A. User can add or remove words in the filter
// B. Get user input on what we can replace the filtered word(s) with

// More in-depth with each step
// 1. Check whether or not to use filter
// a. We need a way for the user to turn on or off the option of using the filter
// b. We need a way to store that input from the user
// c. We then need to call on that stored input and see if it indicates that we do or do not use the filter
// d. If yes, we use filter. Otherwise we do not
var useFilter = true; //temporary variable; will use a checkbox/button/etc in final product

//creating temp quote variable
var tempQuote = "This is the quote we are going to use for testing purposes!";
console.log('checking for filter on/off');


if(useFilter){
    console.log('Filter is turned on. Initiating filter');
    quoteFilter(tempQuote);
}

// 2. Get quote from API
// a. This will be taken care of by the current script in place. We just need to store it somewhere


// 3. Compare words in quote to our filter
// a. First, we need to make sure we have a filter
// b. Take the quote and get each word compared to the filter
// c. If at any point we do find a match, flag it and mark this quote "bad"
// d. If bad quote, go to next step. Otherwise, carry on (step 5)

//creating the filter inside the quoteFilter function
function quoteFilter(quote){
    console.log(quote);
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
    }

// 4. If there ARE words that match the filter, get a new quote
// a. This can be taken care of the API from step 2. We just need to point back there

// 5. If there ARE NO words that match filter, carry on as normal
// a. If we get to this step, no more steps necessary
}


// Seeing what we can do with the optional steps here

// A. User can add or remove words in the filter
// Ideas on how to add:
//  - Textbox
//  - Checkbox
//      - Premade groups (Age rating filter)

// Ideas on how to remove:
//  - Checkbox (just unchecking from above)

