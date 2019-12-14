var express = require('express');
var app = express();

  let hotDog = 'HotDog';
  let ham = 'Hamburger';
  let soda = 'Soda';
  let cookie = 'Cookie';

  let hotSales = 0;
  let hamSales = 0;
  let sodaSales = 0;
  let cookSales = 0;

  continuouslyAsk();

function continuouslyAsk(){
  prompts.question("$ ", function (input){

    if(input == '/version')
    {
      console.log("This is version 1 of the HotBurger service.");
      continouslyAsk();
    }
    else if(input.substring(0, 16) == '/purchase/HotDog')
    {
      hotSales += input.substring(16);
    }
    else if(input.subtring(0, 19) == '/purchase/Hamburger')
    {
      hamSales += input.substring(19);
    }
    else if(input.substring(0, 14) == '/purchase/Soda')
    {
      sodaSales += input.substring(14);
    }
    else if(input.substring(0, 16) == '/purchase/Cookie')
    {
      sodaSales += input.substring(16);
    }
    else {
      console.log(input + " is invalid input.");
    }
  }
}
