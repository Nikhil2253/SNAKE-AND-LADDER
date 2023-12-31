var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var btn = document.querySelector(".btn");
var one = document.querySelector("#i1");
var two = document.querySelector("#i2");
var three = document.querySelector("#i3");
var four = document.querySelector("#i4");
var five = document.querySelector("#i5");
var six = document.querySelector("#i6");
var one1 = document.querySelector("#j1");
var two1 = document.querySelector("#j2");
var three1= document.querySelector("#j3");
var four1 = document.querySelector("#j4");
var five1 = document.querySelector("#j5");
var six1 = document.querySelector("#j6");
var block = document.querySelectorAll(".piece");
var blockarray = Array.from(block);
var block1 = document.querySelectorAll(".piece1");
var block1array = Array.from(block1);
var color = document.querySelectorAll(".block");
var colors = Array.from(color);
var p1=document.querySelector(".btn");
var p2=document.querySelector(".btn1");
var winner1=document.querySelector(".winner1");
var winner2=document.querySelector(".winner2");

colors.forEach((c) => {
  randomno = Math.random();
  if (randomno >= 0 && randomno < 0.2) {
    c.style.backgroundColor = "rgb(155, 164, 245)";
  } else if (randomno >= 0.2 && randomno < 0.4) {
    c.style.backgroundColor = "rgb(187, 254, 226)";
  } else if (randomno >= 0.4 && randomno < 0.6) {
    c.style.backgroundColor = "rgb(248, 216, 147)";
  } else if (randomno >= 0.6 && randomno < 0.8) {
    c.style.backgroundColor = "rgb(218, 165, 249)";
  } else if (randomno >= 0.8 && randomno < 1) {
    c.style.backgroundColor = "rgb(255, 151, 182)";
  } else {
    c.style.backgroundColor = "teal";
  }
});
// player one's chance
var c = 0;
var count = -1;
function Roll() {
  var rand = Math.random();
  if (rand >= 0 && rand < 0.16) {
    one.style.visibility = "visible";
    c = 1;
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    
    move();
  } else if (rand >= 0.16 && rand < 0.32) {
    one.style.visibility = "hidden";
    c = 2;
    two.style.visibility = "visible";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    move();
  } else if (rand >= 0.32 && rand < 0.48) {
    one.style.visibility = "hidden";
    c = 3;
    two.style.visibility = "hidden";
    three.style.visibility = "visible";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    move();
  } else if (rand >= 0.48 && rand < 0.64) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    c = 4;
    four.style.visibility = "visible";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    move();
  } else if (rand >= 0.64 && rand < 0.8) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    c = 5;
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "visible";
    six.style.visibility = "hidden";
    move();
  } else if (rand >= 0.8 && rand < 1) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    c = 6;
    five.style.visibility = "hidden";
    six.style.visibility = "visible";
    move();
  } else {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    c = null;
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
  }
  
  //dice logic ends
}

function move() {
  
  count += c;
  checkLadder();
  checkSnake();
  checkWinner();
  
  blockarray.forEach((e, index) => {
    if (index == count) {
      e.style.visibility = "visible";
    }
    e.style.visibility = "hidden";
  });
  blockarray[count].style.visibility = "visible";
}
function checkLadder(){
  if(count==5){
    count=26;
  }
  else if(count==13){
    count=31;
  }
  else if(count==24){
    count=42;
  }
  else if(count==38){
    count=67;
  }
  else if(count==53){
    count=96;
  }
  else if(count==60){
    count=80;
  }
}
function checkSnake(){
  if(count==44){
    count=3;
  }
  else if(count==29){
    count=7;
  }
  else if(count==84){
    count=27;
  }
  else if(count==93){
    count=41;
  }
  else if(count==87){
    count=58;
  }
  
}

//player two's chance
var c1 = 0;
var count1 = -1;

function Roll1() {
  var rand1 = Math.random();
  if (rand1 >= 0 && rand1< 0.16) {
    one1.style.visibility = "visible";
    c1 = 1;
    two1.style.visibility = "hidden";
    three1.style.visibility = "hidden";
    four1.style.visibility = "hidden";
    five1.style.visibility = "hidden";
    six1.style.visibility = "hidden";
    
    move1();
  } else if (rand1 >= 0.16 && rand1 < 0.32) {
    one1.style.visibility = "hidden";
    c1 = 2;
    two1.style.visibility = "visible";
    three1.style.visibility = "hidden";
    four1.style.visibility = "hidden";
    five1.style.visibility = "hidden";
    six1.style.visibility = "hidden";
    move1();
  } else if (rand1 >= 0.32 && rand1< 0.48) {
    one1.style.visibility = "hidden";
    c1= 3;
    two1.style.visibility = "hidden";
    three1.style.visibility = "visible";
    four1.style.visibility = "hidden";
    five1.style.visibility = "hidden";
    six1.style.visibility = "hidden";
    move1();
  } else if (rand1 >= 0.48 && rand1 < 0.64) {
    one1.style.visibility = "hidden";
    two1.style.visibility = "hidden";
    three1.style.visibility = "hidden";
    c1 = 4;
    four1.style.visibility = "visible";
    five1.style.visibility = "hidden";
    six1.style.visibility = "hidden";
    move1();
  } else if (rand1 >= 0.64 && rand1 < 0.8) {
    one1.style.visibility = "hidden";
    two1.style.visibility = "hidden";
    c1 = 5;
    three1.style.visibility = "hidden";
    four1.style.visibility = "hidden";
    five1.style.visibility = "visible";
    six1.style.visibility = "hidden";
    move1();
  } else if (rand1 >= 0.8 && rand1 < 1) {
    one1.style.visibility = "hidden";
    two1.style.visibility = "hidden";
    three1.style.visibility = "hidden";
    four1.style.visibility = "hidden";
    c1 = 6;
    five1.style.visibility = "hidden";
    six1.style.visibility = "visible";
    move1();
  } else {
    one1.style.visibility = "hidden";
    two1.style.visibility = "hidden";
    three1.style.visibility = "hidden";
    c1 = null;
    four1.style.visibility = "hidden";
    five1.style.visibility = "hidden";
    six1.style.visibility = "hidden";
  }
  
}

function move1() {
  count1 += c1;
  checkLadder1();
  checkSnake1();
  checkWinner();
  block1array.forEach((e, index) => {
    if (index == count1) {
      e.style.visibility = "visible";
    }
    e.style.visibility = "hidden";
  });
  block1array[count1].style.visibility = "visible";
  
}

function checkLadder1(){
  if(count1==5){
    count1=26;
  }
  else if(count1==13){
    count1=31;
  }
  else if(count1==24){
    count1=42;
  }
  else if(count1==38){
    count1=67;
  }
  else if(count1==53){
    count1=96;
  }
  else if(count1==60){
    count1=80;
  }
}
function checkSnake1(){
  if(count1==44){
    count1=3;
  }
  else if(count1==29){
    count1=7;
  }
  else if(count1==84){
    count1=27;
  }
  else if(count1==93){
    count1=41;
  }
  else if(count1==87){
    count1=58;
  }
  
}

function checkWinner(){
  if(count>=100){
    winner2.style.visibility='visible';
  }
  else if(count1>=100){
    winner1.style.visibility='visible';
  }
  else{
    
    winner2.style.visibility='hidden';
    winner1.style.visibility='hidden';
  }
}
p1.onclick=()=>{
  p2.style.visibility='visible'
  p1.style.visibility='hidden'
  Roll();
}
p2.onclick=()=>{
  p1.style.visibility='visible'
  p2.style.visibility='hidden'
  Roll1();
}
