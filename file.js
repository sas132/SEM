var readline = require('readline');

var prompts = readline.createInterface(process.stdin, process.stdout);

    var version = "This is version 1 of the HotBurger service";
    let totalProfit = 0;
    let topSellerStr = "";
    let topSellerNum = 0;
    var hotdogSales = 0;
    var hamSales = 0;
    var sodaSales = 0;
    var cookieSales = 0;
    var requestCount = 0;
    let lastHappened = true;

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
      prompts.question(`$ `, function (input){
          
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
            let i = 0;
            for(i = 0; i < 4; i++)
            {
                console.log(`${menuName[i]}: $${menuPrice[i]}`);
            }
            lastHappened = true;
            continuslyAsk();
        }
        else if(input == "/gettotal")
        {
            console.log(`Total revenue: ${totalProfit}`);
            requestCount++;
            lastHappened = true;
            continuslyAsk();
        }
        else if(input == "/gettopseller")
        {
            console.log(`Top seller: ${topSellerStr} x${topSellerNum}`);
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
        else if(input.substring(0, 9) == "/purchase")
        {
            requestCount++;
            if(input.substring(9, 16) == "/Hotdog")
            {
                let tempHot = parseInt(input.substring(17, input.length));
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
                let tempCookie = parseInt(input.substring(17, input.length));
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
                let tempSoda = parseInt(input.substring(15, input.length));
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
                let tempHam = parseInt(input.substring(20, input.length));
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
                console.log(`${input} is an invalid command.`);
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
            console.log(`${input} is an invalid command.`);
            lastHappened = false;
            continuslyAsk();
        }
      });
    }
