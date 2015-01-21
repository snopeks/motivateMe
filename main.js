console.log("hello world, again")

var motivationArray = [];

var motivation1 = {};

motivation1.quote = "You can do it!"
motivation1.oHigh = "Feeling motivated, thanks!"
motivation1.oMed = "Continue"
motivation1.oLow = "No, I can't..."
console.log(motivation1)

var motivation2 = {};

motivation2.quote = "You're AWESOME!!!"
motivation2.oHigh= "Yeah I am!"
motivation2.oMed = "Continue"
motivation2.oLow = "I don't feel awesome..."

var motivation3 = {};

motivation3.quote = "You are super smart!"
motivation3.oHigh= "Yeah I am!"
motivation3.oMed = "Continue"
motivation3.oLow = "I don't know about that..."

console.log(JSON.stringify(motivation2))


motivationArray.push(motivation1, motivation2, motivation3)
//need to make the randomizer understand not to choose the same item twice in a row
var currentQuote = '';
function nextQuote(){
  var result = motivationArray[Math.floor(Math.random()*motivationArray.length)];
  console.log(currentQuote)
  while(result.quote === currentQuote){
    result = motivationArray[Math.floor(Math.random()*motivationArray.length)];
    console.log('still looking')
  }
  currentQuote = result.quote

  var quoteContainer = document.querySelector("#quote");
  var oHighContainer= document.querySelector("#oHigh");
  var oMedContainer = document.querySelector("#oMed");
  var oLowContainer = document.querySelector("#oLow");

  quoteContainer.innerHTML = result.quote;
  oHighContainer.innerHTML = result.oHigh;
  oMedContainer.innerHTML = result.oMed;
  oLowContainer.innerHTML = result.oLow;

  console.log(result)

}

function happyClick () {
  swal('Yeah you are! Now go do some fucking work!')

}

function onBodyLoad(){
  nextQuote()

}
/*document.querySelector("#oHigh").onClick('swal({
  title: "Error!",
  text: "Here is my error message!",
  type: "error",
  confirmButtonText: "Cool"})')*/
