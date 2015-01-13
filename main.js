console.log("hello world, again")

var motivationArray = [];

var motivation1 = {};

motivation1.quote = "You can do it!"
motivation1.oHigh = "Feeling motivated, thanks!"
motivation1.oMed = "Continue"
motivation1.oLow = "No, I can't..."
console.log(motivation1)

var motivation2 = {};

motivation2.quote = "You're awesome"
motivation2.oHigh= "Yeah I am!"
motivation2.oMed = "continue"
motivation2.oLow = "I don't feel awesome..."

console.log(JSON.stringify(motivation2))

motivationArray.push(motivation1, motivation2)

function onBodyLoad(){
  console.log("bodyLoad")
  var quoteContainer = document.querySelector("#quote");
  var oHighContainer= document.querySelector("#oHigh");
  var oMedContainer = document.querySelector("#oMed");
  var oLowContainer = document.querySelector("#oLow");

  quoteContainer.innerHTML = motivationArray[0].quote;
  oHighContainer.innerHTML = motivationArray[0].oHigh;
  oMedContainer.innerHTML = motivationArray[0].oMed;
  oLowContainer.innerHTML = motivationArray[0].oLow;
}
