function calculate(){
    var number1 = parseFloat(document.getElementById("Number1").value);
    var number2 = parseFloat(document.getElementById("Number2").value);
    var type = parseFloat(document.getElementById("Type").value);
    if(type==1){
        document.getElementById("Display").textContent = "Equation : " + number1 + " + " + number2 + " = x,";
        document.getElementById("Answer").textContent = number1 + number2 + " = x";
    }

    if(type==2){
        document.getElementById("Display").textContent = "Equation : " + number1 + " - " + number2 + " = x,";
        document.getElementById("Answer").textContent = number1 - number2 + " = x";
    }

    if(type==3){
        document.getElementById("Display").textContent = "Equation : " + number1 + " * " + number2 + " = x,";
        document.getElementById("Answer").textContent = number1 * number2 + " = x";
    }

    if(type==4){
        document.getElementById("Display").textContent = "Equation : " + number1 + " / " + number2 + " = x,";
        document.getElementById("Answer").textContent = number1 / number2 + " = x";
    }
}