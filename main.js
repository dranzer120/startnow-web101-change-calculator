// Write your JavaScript here
function handleClickEvent(){
  
   var amountdue = document.getElementById("amount-due").value;
   var customerpaid = document.getElementById("amount-received").value;
   var change = customerpaid - amountdue;
   var twenties = Math.floor(change/20);
   var twenty_remain = change % 20;
   var tens = Math.floor(twenty_remain/10);
   var ten_remain = twenty_remain % 10;
   var fives = Math.floor(ten_remain/5);
   var five_remain = ten_remain % 5;
   var twos = Math.floor(five_remain/2);
   var two_remain = five_remain % 2;
   var decimalchange = Math.round(100*(change % 1));
   var quarters = Math.floor(decimalchange / 25);
   var quarters_remain  = decimalchange % 25;
   var dimes = Math.floor(quarters_remain / 10);
   var dimes_remain = quarters_remain % 10;
   var nickels = Math.floor(dimes_remain / 5);
   var nickels_remain = dimes_remain % 5;
   

   document.getElementById("20-output").innerHTML = twenties;
   document.getElementById("10-output").innerHTML = tens;
   document.getElementById("5-output").innerHTML = fives;
   document.getElementById("2-output").innerHTML = twos;
   document.getElementById("1-output").innerHTML = Math.floor(two_remain);
   document.getElementById("quarters-output").innerHTML = quarters;
   document.getElementById("dimes-output").innerHTML = dimes;
   document.getElementById("nickels-output").innerHTML = nickels;
   document.getElementById("pennies-output").innerHTML = nickels_remain;
}