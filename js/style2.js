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

            ConsoleDEBUG ("Main", "Listerner numbers", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner numbers", "item", item);

    };

    const DELbtn = document.getElementById("calc-keys").getElementsByClassName("DEL");
    for (let item of DELbtn) {
        
        ConsoleDEBUG("Main", "Listerner DELbtn","-","-")

        item.addEventListener("click", function(){

            strUserInput = strUserInput.toString();
            
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

            document.getElementById("userInput").innerText = document.getElementById("userInput").innerText.concat(item.innerText)

            strUserInput = document.getElementById("userInput").innerText
            
            ConsoleDEBUG ("Main", "Listerner OPSbtn", "userInput", document.getElementById("userInput").innerText);
            ConsoleDEBUG ("Main", "Listerner OPSbtn", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner OPSbtn", "item", item);

    };

    const equal = document.getElementById("calc-keys").getElementsByClassName("equal");
    for (let item of equal) {
        
        ConsoleDEBUG("Main", "Listerner equalbtn","-","-")

        item.addEventListener("click", function(){

            document.getElementById("userInput").innerText = document.getElementById("userInput").innerText.concat(item.innerText)



            strUserInput = eval(strUserInput);
            document.getElementById("userInput").innerText = strUserInput
            
            ConsoleDEBUG ("Main", "Listerner equalbtn", "userInput", document.getElementById("userInput").innerText);
            ConsoleDEBUG ("Main", "Listerner equalbtn", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner equalbtn", "item", item);
    };

    const sqared = document.getElementById("calc-keys").getElementsByClassName("btnOpSqr");
    for (let item of sqared) {
        
        ConsoleDEBUG("Main", "Listerner sqaredbtn","-","-")

        item.addEventListener("click", function(){

            strUserInput = eval(strUserInput);
            ConsoleDEBUG ("Main", "Listerner equalbtn", "EVAL userInput", document.getElementById("userInput").innerText);

            strUserInput = Math.pow(strUserInput,2)
            document.getElementById("userInput").innerText = strUserInput
            
            ConsoleDEBUG ("Main", "Listerner sqaredbtn", "POW userInput", document.getElementById("userInput").innerText);
            ConsoleDEBUG ("Main", "Listerner sqaredbtn", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner sqaredbtn", "item", item);
    };

    const fac = document.getElementById("calc-keys").getElementsByClassName("btnOpFac");
    for (let item of fac) {
        
        ConsoleDEBUG("Main", "Listerner facbtn","-","-")

        item.addEventListener("click", function(){

            strUserInput = eval(strUserInput);
            ConsoleDEBUG ("Main", "Listerner facbtn", "EVAL userInput", document.getElementById("userInput").innerText);

            strUserInput = factorial(strUserInput);
            document.getElementById("userInput").innerText = strUserInput
            
            ConsoleDEBUG ("Main", "Listerner facbtn", "POW userInput", document.getElementById("userInput").innerText);
            ConsoleDEBUG ("Main", "Listerner facbtn", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner sqaredbtn", "item", item);
    };

};

function ConsoleDEBUG(strFunction, strText, strVariable, strValue){
    
    console.log("Function: " + strFunction + " | Hinweis/Pos.: " + strText + " | Variable: "+ strVariable + " | Wert: " + strValue);

};

function factorial(n) {

    ConsoleDEBUG ("factorial", "inputValue", "n", n);

    if (n < 0) return "Factorial for negative numbers is not defined";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    ConsoleDEBUG ("factorial", "returnValue", "result", result);

    return result;
}