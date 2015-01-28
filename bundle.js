(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    text: "Now go do some fucking work"})

}

function sadClick(){
  swal({
    title: "Aww, sad face.",
    text: "Maybe you could work on a passion project?"})
  return nextQuote()
}
function onBodyLoad(){
  nextQuote()
}

eventListeners();
onBodyLoad();

},{"./quotes":2}],2:[function(require,module,exports){
module.exports = [
  {
    "quote":"You can do it!",
    "oHigh":"Feeling motivated, thanks!",
    "oMed":"Give me more motivation plz",
    "oLow":"No, I can't..."
  },
  {
    "quote":"You're super AWESOME!!!",
    "oHigh":"I totally am!",
    "oMed":"Give me more motivation plz",
    "oLow":"I don't feel awesome..."
  },
  {
    "quote":"You are a GIFT to humankind!",
    "oHigh":"So true!",
    "oMed":"Give me more motivation plz",
    "oLow":"I don't know about that..."
  },
  {
    "quote":"You are fucking TALENTED!",
    "oHigh":"Yeah I am!",
    "oMed":"Give me more motivation plz",
    "oLow":"I don't believe you..."
  },
  {
    "quote":"You are fucking BRILLIANT!",
    "oHigh":"Yeah I am!",
    "oMed":"Give me more motivation plz",
    "oLow":"I don't think so..."
  },
  {
    "quote":"Work hard first, play hard later!",
    "oHigh":"Sweet! I can totally work hard!",
    "oMed":"Give me more motivation plz",
    "oLow":"I don't think so..."
  },
  {
    "quote":"You are a badass human!",
    "oHigh":"I really am amazing!",
    "oMed":"Give me more motivation plz",
    "oLow":"I don't think so..."
  }
]

},{}]},{},[1]);
