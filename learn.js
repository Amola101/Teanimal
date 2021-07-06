//FILTER

// Type of Animes Variables
var sani = document.getElementById("sani");
var fani = document.getElementById("fani");
var wani = document.getElementById("wani");

//Category of animal varibles
var m = document.getElementById("m");
var r = document.getElementById("r");
var b = document.getElementById("b");
var a = document.getElementById("a");
var f = document.getElementById("f");

sani.addEventListener('click', seaAnimal);
fani.addEventListener('click', farmAnimal);
wani.addEventListener('click', wildAnimal);

m.addEventListener('click', mammal);
r.addEventListener('click', reptile);
b.addEventListener('click', bird);
a.addEventListener('click', amphibian);
f.addEventListener('click', fish);

function seaAnimal() {
  document.getElementById("5").style.display = "none";
  document.getElementById("6").style.display = "none";
  document.getElementById("7").style.display = "none";
  document.getElementById("8").style.display = "none";
  document.getElementById("9").style.display = "none";
  document.getElementById("10").style.display = "none";
  document.getElementById("11").style.display = "none";
  document.getElementById("12").style.display = "none";
  document.getElementById("13").style.display = "none";
  document.getElementById("14").style.display = "none";
  document.getElementById("15").style.display = "none";
  document.getElementById("16").style.display = "none";
  document.getElementById("17").style.display = "none";
  document.getElementById("18").style.display = "none";
  document.getElementById("20").style.display = "none";
};

function farmAnimal() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("9").style.display = "none";
  document.getElementById("11").style.display = "none";
  document.getElementById("12").style.display = "none";
  document.getElementById("13").style.display = "none";
  document.getElementById("14").style.display = "none";
  document.getElementById("15").style.display = "none";
  document.getElementById("19").style.display = "none";
};

function wildAnimal() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.getElementById("6").style.display = "none";
  document.getElementById("7").style.display = "none";
  document.getElementById("8").style.display = "none";
  document.getElementById("10").style.display = "none";
  document.getElementById("17").style.display = "none";
  document.getElementById("18").style.display = "none";
  document.getElementById("19").style.display = "none";  
  document.getElementById("20").style.display = "none";
};


function mammal() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("6").style.display = "none";
  document.getElementById("7").style.display = "none";
  document.getElementById("8").style.display = "none";
  document.getElementById("10").style.display = "none";
  document.getElementById("12").style.display = "none";
  document.getElementById("13").style.display = "none";
  document.getElementById("15").style.display = "none";
  document.getElementById("17").style.display = "none";
};

function bird() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.getElementById("9").style.display = "none";
  document.getElementById("11").style.display = "none";
  document.getElementById("14").style.display = "none";
  document.getElementById("15").style.display = "none";
  document.getElementById("16").style.display = "none";
  document.getElementById("17").style.display = "none";
  document.getElementById("18").style.display = "none";
  document.getElementById("19").style.display = "none";
  document.getElementById("20").style.display = "none";
};

function reptile() {
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.getElementById("6").style.display = "none";
  document.getElementById("7").style.display = "none";
  document.getElementById("8").style.display = "none";
  document.getElementById("9").style.display = "none";
  document.getElementById("10").style.display = "none";
  document.getElementById("11").style.display = "none";
  document.getElementById("12").style.display = "none";
  document.getElementById("13").style.display = "none";
  document.getElementById("14").style.display = "none";
  document.getElementById("15").style.display = "none";
  document.getElementById("16").style.display = "none";
  document.getElementById("17").style.display = "none";
  document.getElementById("18").style.display = "none";
  document.getElementById("19").style.display = "none";
  document.getElementById("20").style.display = "none";
};

function amphibian() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.getElementById("6").style.display = "none";
  document.getElementById("7").style.display = "none";
  document.getElementById("8").style.display = "none";
  document.getElementById("9").style.display = "none";
  document.getElementById("10").style.display = "none";
  document.getElementById("11").style.display = "none";
  document.getElementById("12").style.display = "none";
  document.getElementById("13").style.display = "none";
  document.getElementById("14").style.display = "none";
  document.getElementById("16").style.display = "none";
  document.getElementById("17").style.display = "none";
  document.getElementById("18").style.display = "none";
  document.getElementById("19").style.display = "none";
  document.getElementById("20").style.display = "none";
};

function fish() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.getElementById("6").style.display = "none";
  document.getElementById("7").style.display = "none";
  document.getElementById("8").style.display = "none";
  document.getElementById("9").style.display = "none";
  document.getElementById("10").style.display = "none";
  document.getElementById("11").style.display = "none";
  document.getElementById("12").style.display = "none";
  document.getElementById("13").style.display = "none";
  document.getElementById("14").style.display = "none";
  document.getElementById("15").style.display = "none";
  document.getElementById("16").style.display = "none";
  document.getElementById("17").style.display = "none";
  document.getElementById("18").style.display = "none";
  document.getElementById("19").style.display = "none";
  document.getElementById("20").style.display = "none";
};