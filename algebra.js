function calculate2(){
    var number1 = parseFloat(document.getElementById("Number1").value);
    var number2 = parseFloat(document.getElementById("Number2").value);
    var type = parseFloat(document.getElementById("Type").value);
    var variable = parseFloat(document.getElementById("Variable").value);

    if(type==1){
        if(variable==2){
            document.getElementById("Display").textContent = "Equation : " + number1 + " + " + "x = " + number2 + ", ";
            document.getElementById("Answer").textContent = number2 - number1 + " = x";
        }else if(variable==1){
            document.getElementById("Display").textContent = "Equation : " + "x" + " + " + number1 + " = " + number2 + ", ";
            document.getElementById("Answer").textContent = number2 - number1 + " = x";
        }
    }

    if(type==2){
        if(variable==2){
            document.getElementById("Display").textContent = "Equation : " + number1 + " - " + "x = " + number2 + ", ";
            document.getElementById("Answer").textContent = number1 - number2 + " = x";
        }else if(variable==1){
            document.getElementById("Display").textContent = "Equation : " + "x" + " - " + number1 + " = " + number2 + ", ";
            document.getElementById("Answer").textContent = number1 + number2 + " = x";
        }
    }

    if(type==3){
        if(variable==2){
            document.getElementById("Display").textContent = "Equation : " + number1 + " * " + "x = " + number2 + ", ";
            document.getElementById("Answer").textContent = number2 / number1 + " = x";
        }else if(variable==1){
            document.getElementById("Display").textContent = "Equation : " + "x" + " * " + number1 + " = " + number2 + ", ";
            document.getElementById("Answer").textContent = number2 / number1 + " = x";
        }
    }

    if(type==4){
        if(variable==2){
            document.getElementById("Display").textContent = "Equation : " + number1 + " / " + "x = " + number2 + ", ";
            document.getElementById("Answer").textContent = number1 / number2 + " = x";
        }else if(variable==1){
            document.getElementById("Display").textContent = "Equation : " + "x" + " / " + number1 + " = " + number2 + ", ";
            document.getElementById("Answer").textContent = number1 * number2 + " = x";
        }
    }
}
