var speler1 = 0;

function  steen1(){
   speler1 = 1;
}
function  papier1(){
   speler1 = 2;
}
function  schaar1(){
   speler1 = 3;
}

function  steen2(){
  if (speler1 == 1) {
    console.log("gelijk spel");
  }
  if (speler1 == 2) {
    console.log("speler1 gewonnen");
  }
  if (speler1 == 3) {
    console.log("speler2 gewonnen");
  }
}
function  papier2(){
  if (speler1 == 1) {
    console.log("speler2 gewonnen");
  }
  if (speler1 == 2) {
    console.log("gelijk spel");
  }
  if (speler1 == 3) {
    console.log("speler1 gewonnen");
  }
}
function  schaar2(){
  if (speler1 == 1) {
    console.log("speler1 gewonnen");
  }
  if (speler1 == 2) {
    console.log("speler2 gewonnen");
  }
  if (speler1 == 3) {
    console.log("gelijk spel");
  }
}
