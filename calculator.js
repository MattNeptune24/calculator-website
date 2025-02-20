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

function calculate3(){
    var number1 = parseFloat(document.getElementById("Number1").value);
    var number2 = parseFloat(document.getElementById("Number2").value);
    var number3 = parseFloat(document.getElementById("Number3").value);
    var number4 = parseFloat(document.getElementById("Number4").value);
    var variable = parseFloat(document.getElementById("Variable").value);

    if(variable==1){
        document.getElementById("Display").textContent = "Equation : " + "x" + " / " + number2 + " = " + number3 + " / " + number4 + ", ";
        document.getElementById("Answer").textContent = " x = " + (number2 * number3)/number4;
    }
    if(variable==2){
        document.getElementById("Display").textContent = "Equation : " + number1 + " / " + "x" + " = " + number3 + " / " + number4 + ", ";
        document.getElementById("Answer").textContent = " x = " + (number1 * number4)/number3;
    }
    if(variable==3){
        document.getElementById("Display").textContent = "Equation : " + number1 + " / " + number2 + " = " + "x" + " / " + number4 + ", ";
        document.getElementById("Answer").textContent = " x = " + (number1 * number4)/number2;
    }
    if(variable==4){
        document.getElementById("Display").textContent = "Equation : " + number1 + " / " + number2 + " = " + number3 + " / " + "x" + ", ";
        document.getElementById("Answer").textContent = " x = " + (number2 * number3)/number1;
    }
}

function calculate4(){
    var number1 = parseFloat(document.getElementById("Number1").value);
    var number2 = parseFloat(document.getElementById("Number2").value);
    var number3 = parseFloat(document.getElementById("Number3").value);
    var number4 = parseFloat(document.getElementById("Number4").value);
    var type = parseFloat(document.getElementById("Type").value);

    if(type==1){
        document.getElementById("Display").textContent = "Equation : " + number1 + " / " + number2 + " + " + number3 + " / " + number4 + " = x, ";
        document.getElementById("Answer").textContent = " x = " + ((number1 * number4) + (number3 * number2)) + " / " + (number2 * number4);
    }
    if(type==2){
        document.getElementById("Display").textContent = "Equation : " + number1 + " / " + number2 + " - " + number3 + " / " + number4 + " = x, ";
        document.getElementById("Answer").textContent = " x = " + ((number1 * number4) - (number3 * number2)) + " / " + (number2 * number4);
    }
    if(type==3){
        document.getElementById("Display").textContent = "Equation : " + number1 + " / " + number2 + " * " + number3 + " / " + number4 + " = x, ";
        document.getElementById("Answer").textContent = " x = " + (number1 * number3) + " / " + (number2 * number4);
    }
    if(type==4){
        document.getElementById("Display").textContent = "Equation : " + number1 + " / " + number2 + " / " + number3 + " / " + number4 + " = x, ";
        document.getElementById("Answer").textContent = " x = " + (number1 * number4) + " / " + (number2 * number3);
    }
}

function calculate5(){
    var number1 = parseFloat(document.getElementById("Number1").value);
    document.getElementById("Display").textContent = "Equation : " + "x" + " Squared = " + number1 + ", ";
    document.getElementById("Answer").textContent = " x = " + Math.sqrt(number1);
}

function calculate6(){
    var number1 = parseFloat(document.getElementById("Number1").value);
    var number2 = parseFloat(document.getElementById("Number2").value);
    var number3 = parseFloat(document.getElementById("Number3").value);
    var number4 = parseFloat(document.getElementById("Number4").value);
    var number5 = parseFloat(document.getElementById("Number5").value);
    var ammount = parseFloat(document.getElementById("Ammount").value);

    if(ammount==2){
        document.getElementById("Display").textContent = "Equation : " + "Average of " + number1 + ", " + number2 + " = x, ";
        document.getElementById("Answer").textContent = " x = " + (number1+number2)/2;
    }

    if(ammount==3){
        document.getElementById("Display").textContent = "Equation : " + "Average of " + number1 + ", " + number2 + ", " + number3 + " = x, ";
        document.getElementById("Answer").textContent = " x = " + (number1+number2+number3)/3;
    }

    if(ammount==4){
        document.getElementById("Display").textContent = "Equation : " + "Average of " + number1 + ", " + number2 + ", " + number3 + ", " + number4 + " = x, ";
        document.getElementById("Answer").textContent = " x = " + (number1+number2+number3+number4)/4;
    }

    if(ammount==5){
        document.getElementById("Display").textContent = "Equation : " + "Average of " + number1 + ", " + number2 + ", " + number3 + ", " + number4 + ", "+ number5 + " = x, ";
        document.getElementById("Answer").textContent = " x = " + (number1+number2+number3+number4+number5)/5;
    }
}

function calculate7(){
    var number1 = parseFloat(document.getElementById("Number1").value);
    var number2 = parseFloat(document.getElementById("Number2").value);
    document.getElementById("Display").textContent = "Equation : " + number1 + " To the power of " + number2 + " = x, ";
    document.getElementById("Answer").textContent = " x = " + (number1**number2);
}

function calculate8(){
    var number1 = parseFloat(document.getElementById("Number1").value);
    document.getElementById("Display").textContent = "Equation : " + "Circumference of a circle with the radius of " + number1 + " = x, ";
    document.getElementById("Answer").textContent = " x = " + ((2*3.14159)*number1);
}
