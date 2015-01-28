//this is the js for motivateMe
var quotes = require('./quotes');
var motivationArray = quotes;
console.log(motivationArray)

var quoteContainer = document.getElementById("quote");
var oHighContainer= document.getElementById("oHigh");
var oMedContainer = document.getElementById("oMed");
var oLowContainer = document.getElementById("oLow");

function eventListeners(){
  oHighContainer.addEventListener('click', happyClick, false)
  oLowContainer.addEventListener('click', sadClick, false)
  oMedContainer.addEventListener('click', nextQuote, false)
}
//need to make the randomizer understand not to choose the same item twice in a row
var currentQuote = '';
function nextQuote(){
  var result = motivationArray[Math.floor(Math.random()*motivationArray.length)];
  console.log(currentQuote)
  while(result.quote === currentQuote){
    result = motivationArray[Math.floor(Math.random()*motivationArray.length)];
    console.log('still looking')
  }
  //currentQuote = result.quote



  quoteContainer.innerHTML = result.quote;
  oHighContainer.innerHTML = result.oHigh;
  oMedContainer.innerHTML = result.oMed;
  oLowContainer.innerHTML = result.oLow;

  console.log(result)

}

function happyClick () {

  swal({
    title: "That's more LIKE it!",
    text: "Now go do some fucking work",})

}

function sadClick(){
  swal('Maybe you could work on a passion project?')

  return nextQuote()
}
function onBodyLoad(){
  nextQuote()
}

eventListeners();
onBodyLoad();
