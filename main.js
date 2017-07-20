'use strict';

var getQuotes = new XMLHttpRequest();
var getQuotesHeaders = new Headers();
var quoteObj;


// GET QUOTES FROM THE API
getQuotes.open("POST", "data.json", true);
// getQuotesHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// getQuotesHeaders.append("Accept", "application/json");
// getQuotesHeaders.append("X-Mashape-key", "bt3ABQ48enmsh7h898aHsk6InykBp1FUtipjsnqeZ5wIQ4ncs4");
getQuotes.responseType = 'text';
getQuotes.send(null);

getQuotes.onload = function() {
  quoteObj = JSON.parse(getQuotes.responseText);
  console.log(quoteObj);
  // console.log(getQuotesHeaders.get('X-Mashape-key'));

} // end of function
