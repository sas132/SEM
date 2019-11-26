console.log("Hello World");
var readline = require('readline');
var prompts = readline.createInterface(process.stdin, process.stdout);

    var version = "This is version 1 of the HotBurger service";
    var totalProfit = 0;
    var topSellerStr = "";
    var topSellerNum = 0;
    var hotdogSales = 0;
    var hamSales = 0;
    var sodaSales = 0;
    var cookieSales = 0;
    var requestCount = 0;
    var lastHappened = true;

    var menuName = [];
    menuName.push("Hotdog");
    menuName.push("Hamburger");
    menuName.push("Soda");
    menuName.push("Cookie");

    var menuPrice = [];
    menuPrice.push(20);
    menuPrice.push(35);
    menuPrice.push(4);
    menuPrice.push(6);

  continuslyAsk();

    function continuslyAsk(){
      prompts.question("$ ", function (input){

        if(input == "/version")
        {
            console.log(version);
            requestCount++;
            lastHappened = true;
            continuslyAsk();
        }
        else if(input == "/getmenu")
        {
            requestCount++;
            var i = 0;
            for(i = 0; i < 4; i++)
            {
                console.log(menuName[i] + ": $" + menuPrice[i]);
            }
            lastHappened = true;
            continuslyAsk();
        }
        else if(input == "/gettotal")
        {
            console.log("Total revenue: " + totalProfit);
            requestCount++;
            lastHappened = true;
            continuslyAsk();
        }
        else if(input == "/gettopseller")
        {
            console.log("Top seller: " + topSellerStr + "x" + topSellerNum);
            requestCount++;
            lastHappened = true;
            continuslyAsk();
        }
        else if(input == "/getrequestcount")
        {
            console.log(requestCount);
            requestCount++;
            lastHappened = true;
            continuslyAsk();
        }
        else if(input.substring(0, 9) == "/getcount")
        {
          requestCount++;
          if(input.substring(9, 16) == "/Hotdog")
          {
              console.log("Number of Hotdog sold: " + HotdogSales);
          }
          else if(input.substring(9, 16) == "/Cookie")
          {
              console.log("Number of Cookie sold: " + CookieSales);
          }
          else if(input.substring(9, 14) == "/Soda")
          {
              console.log("Number of Soda sold: " + SodaSales);
          }
          else if(input.substring(9, 19) == "/Hamburger")
          {
              console.log("Number of Hamburger sold: " + HamburgerSales);
          }
          else
          {
              console.log(input + " is an invalid command.");
          }
          continuslyAsk();
        }
        else if(input.substring(0, 9) == "/setcount")
        {
          if(input.substring(9, 16) == "/Hotdog")
          {
              var tempNum = parseInt(input.substring(17, input.length));
              HotdogSales = tempNum;
          }
          else if(input.substring(9, 16) == "/Cookie")
          {
            var tempNum = parseInt(input.substring(17, input.length));
              CookieSales = tempNum;
          }
          else if(input.substring(9, 14) == "/Soda")
          {
            var tempNum = parseInt(input.substring(15, input.length));
            SodaSales = tempNum;
          }
          else if(input.substring(9, 19) == "/Hamburger")
          {
            var tempNum = parseInt(input.substring(20, input.length));
            HamburgerSales = tempNum;
          }
          else
          {
              console.log(input + " is an invalid command.");
          }
        }
        else if(input.substring(0, 9) == "/purchase")
        {
            requestCount++;
            if(input.substring(9, 16) == "/Hotdog")
            {
                var tempHot = parseInt(input.substring(17, input.length));
                hotdogSales += tempHot;
                totalProfit += (tempHot * menuPrice[0]);
                if(topSellerNum < hotdogSales)
                {
                    topSellerNum = hotdogSales;
                    topSellerStr = "Hotdog";
                }
                lastHappened = true;
            }
            else if(input.substring(9, 16) == "/Cookie")
            {
                var tempCookie = parseInt(input.substring(17, input.length));
                cookieSales += tempCookie;
                totalProfit += (tempCookie * menuPrice[3]);
                if(topSellerNum < cookieSales)
                {
                    topSellerNum = cookieSales;
                    topSellerStr = "Cookie";
                }
                lastHappened = true;
            }
            else if(input.substring(9, 14) == "/Soda")
            {
                var tempSoda = parseInt(input.substring(15, input.length));
                sodaSales += tempSoda;
                totalProfit += (tempSoda * menuPrice[2]);
                if(topSellerNum < sodaSales)
                {
                    topSellerNum = sodaSales;
                    topSellerStr = "Soda";
                }
                lastHappened = true;
            }
            else if(input.substring(9, 19) == "/Hamburger")
            {
                var tempHam = parseInt(input.substring(20, input.length));
                hamSales += tempHam;
                totalProfit += (tempHam * menuPrice[1]);
                if(topSellerNum < hamSales)
                {
                    topSellerNum = hamSales;
                    topSellerStr = "Hamburger";
                }
                lastHappened = true;
            }
            else
            {
                requestCount++;
                console.log(input + " is an invalid command.");
                lastHappened = false;
            }
            continuslyAsk();
        }
        else if(input == "exit")
        {
            console.log("Exiting.");
            continueAsking = false;
            process.exit();
        }
        else
        {
            console.log(input + " is an invalid command.");
            lastHappened = false;
            continuslyAsk();
        }
      });
    }
