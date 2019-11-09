var readline = require('readline');

var prompts = readline.createInterface(process.stdin, process.stdout);

  let allLogs = "";
  let version = "This is version 0 of the HotBurger service";

  continuslyAsk();

    function continuslyAsk(){
      prompts.question(`$ `, function (input){
        if(input == "/version")
        {
            console.log(version);
            allLogs += ("\n" + version);
            continuslyAsk();
        }
        else if(input == "/logs")
        {
            console.log(allLogs);
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
            allLogs += ("\n" + input + " is an invalid command.");
            continuslyAsk();
        }
      });
    }
