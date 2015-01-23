(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//this is the js for motivateMe
var unique = require('uniq');
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
    text: "Now go do some fucking work",
    button: "hell yes",})

}

function sadClick(){
  swal('Hey, we all have bad days. You are gonna be ok!')

  return nextQuote()
}
function onBodyLoad(){
  nextQuote()
}

eventListeners();
onBodyLoad();
/*document.querySelector("#oHigh").onClick('swal({
  title: "Error!",
  text: "Here is my error message!",
  type: "error",
  confirmButtonText: "Cool"})')*/

},{"./quotes":3,"uniq":2}],2:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],3:[function(require,module,exports){
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
    "quote":"You are here to do GREAT THINGS!",
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
