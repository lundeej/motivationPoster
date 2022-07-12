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
// C. Possibility of pulling data from API multiple times from the first click in order to cache "good" and expected results the first time around rather
//    rather than running the fetching script multipule times in order to prevent overloading the API or script