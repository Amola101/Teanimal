// FACTS GENERATOR

var factList = [
  "Due to genetic manipulation, 90% of broiler chickens (chicken bred specifically for meat production) have trouble walking.",
  "More than 50% of the fur in the US comes from China, where millions of dogs and cats are often bled to death and skinned alive for their fur.",
  "Over 115 million animals – mice, rats, dogs, cats, rabbits, monkeys, birds, among others – are killed in laboratory experiments worldwide for chemical, drug, food, and cosmetics testing every year.", 
  "About 97% of all abused and killed animals yearly are farm animals.",
  "On average, 250,000 animals every year are victims of animal hoarding.", 
  "There are 5,000-6,000 tigers living in captivity in China to fuel the traditional medicine industry",
  "Every 60 seconds 1 animal suffers from abuse",
  "It's estimated that the lifetime prevalence of animal abuse in US adults is 1.8%, according to domestic animal abuse statistics.",
  "Animal abuse can happen from people who feel powerless.",
  "People with narcisstic problems are more than likely to kill their pets even"
];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

