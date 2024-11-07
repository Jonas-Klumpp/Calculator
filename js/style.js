window.onload = function(){

    strUserInput = "0";

    input = document.getElementById("userInput").innerText
    
    // fügt Eventlistener zu jedem numbers-Button hinzu
    const numbers = document.getElementById("calc-keys").getElementsByClassName("numbers");
    for (let item of numbers) {
        item.addEventListener("click", function(){

            // wenn nur 0 da steht wird 0 durch das gewünschte zeichen ersetzt
            if (document.getElementById("userInput").innerText == 0){
                document.getElementById("userInput").innerText = item.innerText
            }

            // wenn userInput != 0 dann wird der gewünschte character dem string hinzugefügt
            else{
                document.getElementById("userInput").innerText = document.getElementById("userInput").innerText.concat(item.innerText);
                
            }
            
            ConsoleDEBUG ("Main", "Listerner Values", "userInput", document.getElementById("userInput").innerText);
            
            strUserInput = document.getElementById("userInput").innerText;

            ConsoleDEBUG ("Main", "Listerner Values", "strUserInput", strUserInput);

        });

        ConsoleDEBUG ("Main", "Listerner Values", "item", item);

    };


    // fügt Eventlistener zu dem AC-Button hinzu
    const AC = document.getElementById("calc-keys").getElementsByClassName("AC");
    for (let item of AC) {
        item.addEventListener("click", function(){
            
            // user input wird auf 0 gesetzt
            document.getElementById("userInput").innerText = 0
            strUserInput = 0
        });

        ConsoleDEBUG ("Main", "Listerner AC-Button", "userInput", document.getElementById("userInput").innerText);
        ConsoleDEBUG ("Main", "Listerner AC-Button", "strUserInput", strUserInput);
    };


    // fügt Eventlistener zu DEL-Button hinzu
    const DEL = document.getElementById("calc-keys").getElementsByClassName("DEL");
    for (let item of DEL) {
        item.addEventListener("click", function(){

            //sobald der Button gedrückt wird, wird der string ohne das letzte element neu definiert
            document.getElementById("userInput").innerText = document.getElementById("userInput").innerText.slice(0, -1);
        });

        ConsoleDEBUG ("Main", "Listerner DEL-Button", "userInput", document.getElementById("userInput").innerText);
        ConsoleDEBUG ("Main", "Listerner DEL-Button", "strUserInput", strUserInput);
    };


    // fügt Eventlistener zu jedem operation-Button hinzu
    const operations = document.getElementById("calc-keys").getElementsByClassName("btnOperations");
    for (let item of operations) {

        ConsoleDEBUG ("Main", "Listerner Opperatoren", "", operations);

        item.addEventListener("click", function(){

            // wenn der Button gedrückt wird, wird das zeichen dem string hinzugefügt
            document.getElementById("userInput").innerText = document.getElementById("userInput").innerText.concat(item.innerText);
        });

        strUserInput = document.getElementById("userInput").innerText;

        ConsoleDEBUG ("Main", "Listerner Opperatoren", "userInput", document.getElementById("userInput").innerText);
        ConsoleDEBUG ("Main", "Listerner Opperatoren", "strUserInput", strUserInput);
    };


    // // fügt Eventlistener zu jedem Klammer-Button hinzu
    // const klammern = document.getElementById("calc-keys").getElementsByClassName("topRow");
    // for (let item of klammern) {
    //     item.addEventListener("click", function(){     
            
    //         // wenn der Button gedrückt wird, wird das zeichen dem string hinzugefügt
    //         document.getElementById("userInput").innerText = document.getElementById("userInput").innerText.concat(item.innerText);
    //     });
    // }

    // fügt Eventlistener zu jedem equal-Button hinzu
    const equal = document.getElementById("calc-keys").getElementsByClassName("equal");
    for (let item of equal) {
        item.addEventListener("click", function(){    
            
            strUserInput.replace("^", "**");
            
            strResult = eval(strUserInput);
            ConsoleDEBUG ("Main", "Listerner Result", "strUserInput", strUserInput);
            ConsoleDEBUG ("Main", "Listerner Result", "strResult", strResult);
            
            // wenn der Button gedrückt wird, wird 
            document.getElementById("userInput").innerText = strResult
        });
    };
};


function ConsoleDEBUG(strFunction, strText, strVariable, strValue){
    
    console.log("Function: " + strFunction + " | Hinweis/Pos.: " + strText + " | Variable: "+ strVariable + " | Wert: " + strValue);

};