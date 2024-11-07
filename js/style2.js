window.onload = function(){

    

    strUserInput = "0";

    input = ""
    
    // fügt Eventlistener zu jedem numbers-Button hinzu
    const numbers = document.getElementById("calc-keys").getElementsByClassName("numbers");

    ConsoleDEBUG("-----------","---------","---------","---------")

    for (let item of numbers) {

        ConsoleDEBUG("Main", "Listerner numbers Values","-","-")

        item.addEventListener("click", function(){


               // wenn nur 0 da steht wird 0 durch das gewünschte zeichen ersetzt
           if (document.getElementById("userInput").innerText == 0){
                document.getElementById("userInput").innerText = item.innerText
            }

            // wenn userInput != 0 dann wird der gewünschte character dem string hinzugefügt
            else{
                document.getElementById("userInput").innerText = document.getElementById("userInput").innerText.concat(item.innerText);
                
            }
            
            ConsoleDEBUG ("Main", "Listerner numbers", "userInput", document.getElementById("userInput").innerText);
            
            strUserInput = document.getElementById("userInput").innerText;
            // document.getElementById("userinput").innerText = strUserInput

            ConsoleDEBUG ("Main", "Listerner numbers", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner numbers", "item", item);

    };

    const DELbtn = document.getElementById("calc-keys").getElementsByClassName("DEL");
    for (let item of DELbtn) {
        
        ConsoleDEBUG("Main", "Listerner DELbtn","-","-")

        item.addEventListener("click", function(){

            let intStringLenght = strUserInput.length

            ConsoleDEBUG("Main","Listerner DELbtn","strUserInput.length",intStringLenght)

            if (intStringLenght == 1){
                
                strUserInput = "0"

            } else {

                strUserInput = strUserInput.slice(0, -1)

            }
            
            ConsoleDEBUG ("Main", "Listerner DELbtn", "userInput", document.getElementById("userInput").innerText);
            
            document.getElementById("userInput").innerText = strUserInput;

            ConsoleDEBUG ("Main", "Listerner DELbtn", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner DELbtn", "item", item);

    };

    const ACbtn = document.getElementById("calc-keys").getElementsByClassName("AC");
    for (let item of ACbtn) {
        
        ConsoleDEBUG("Main", "Listerner ACbtn","-","-")

        item.addEventListener("click", function(){

            strUserInput = "0"
            document.getElementById("userInput").innerText = strUserInput;
            
            ConsoleDEBUG ("Main", "Listerner ACbtn", "userInput", document.getElementById("userInput").innerText);
            ConsoleDEBUG ("Main", "Listerner ACbtn", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner ACbtn", "item", item);

    };

    const OPSbtn = document.getElementById("calc-keys").getElementsByClassName("btnOperations");
    for (let item of OPSbtn) {
        
        ConsoleDEBUG("Main", "Listerner OPSbtn","-","-")

        item.addEventListener("click", function(){

            strUserInput = strUserInput
            
            ConsoleDEBUG ("Main", "Listerner OPSbtn", "userInput", document.getElementById("userInput").innerText);
            ConsoleDEBUG ("Main", "Listerner OPSbtn", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner OPSbtn", "item", item);

    };


};

function ConsoleDEBUG(strFunction, strText, strVariable, strValue){
    
    console.log("Function: " + strFunction + " | Hinweis/Pos.: " + strText + " | Variable: "+ strVariable + " | Wert: " + strValue);

};