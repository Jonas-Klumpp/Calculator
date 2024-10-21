window.onload = function(){

    var mathFunction = 0;
    
    // fügt Eventlistener zu jedem numbers-Button hinzu
    const numbers = document.getElementById("calc-keys").getElementsByClassName("numbers");
    for (let item of numbers) {
        item.addEventListener("click", function(){

            // wenn nur 0 da steht wird 0 durch das gewünschte zeichen ersetzt
            if (document.getElementById("user-input").innerText == 0){
                document.getElementById("user-input").innerText = item.innerText
            }

            // wenn user-input != 0 dann wird der gewünschte character dem string hinzugefügt
            else{
                document.getElementById("user-input").innerText = document.getElementById("user-input").innerText.concat(item.innerText);
            }
        });
    }


    // fügt Eventlistener zu dem AC-Button hinzu
    const AC = document.getElementById("calc-keys").getElementsByClassName("AC");
    for (let item of AC) {
        item.addEventListener("click", function(){
            
            // user input wird auf 0 gesetzt
            document.getElementById("user-input").innerText = 0
        });
    }


    // fügt Eventlistener zu DEL-Button hinzu
    const DEL = document.getElementById("calc-keys").getElementsByClassName("DEL");
    for (let item of DEL) {
        item.addEventListener("click", function(){

            //sobald der Button gedrückt wird, wird der string ohne das letzte element neu definiert
            document.getElementById("user-input").innerText = document.getElementById("user-input").innerText.slice(0, -1);
        });
    }


    // fügt Eventlistener zu jedem operation-Button hinzu
    const operations = document.getElementById("calc-keys").getElementsByClassName("operations");
    for (let item of operations) {
        item.addEventListener("click", function(){

            // wenn der Button gedrückt wird, wird das zeichen dem string hinzugefügt
            document.getElementById("user-input").innerText = document.getElementById("user-input").innerText.concat(item.innerText);
        });
    }


    // fügt Eventlistener zu jedem Klammer-Button hinzu
    const klammern = document.getElementById("calc-keys").getElementsByClassName("topRow");
    for (let item of klammern) {
        item.addEventListener("click", function(){     
            
            // wenn der Button gedrückt wird, wird das zeichen dem string hinzugefügt
            document.getElementById("user-input").innerText = document.getElementById("user-input").innerText.concat(item.innerText);
        });
    }

    // fügt Eventlistener zu jedem Klammer-Button hinzu
    const equal = document.getElementById("calc-keys").getElementsByClassName("equal");
    for (let item of equal) {
        item.addEventListener("click", function(){     
            
            // wenn der Button gedrückt wird, wird 
            document.getElementById("user-input").innerText = document.getElementById("user-input").innerText.replace("^", "**")
            document.getElementById("user-input").innerText = document.getElementById("user-input").innerText.replace("!", "")
        });
    }
}


function test(){
    
    console.log(document.getElementById("calc-keys"));

}