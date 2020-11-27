var operation;
var opa;
var opb;

function init(){
    var result = document.getElementById("result");

    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var tree = document.getElementById('tree');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var zero = document.getElementById('zero');

    var multiplication = document.getElementById('multiplication');
    var division = document.getElementById('division');
    var sustraction = document.getElementById('sustraction');
    var addition = document.getElementById('addition');
    var clear = document.getElementById('clear');
    var equal = document.getElementById('equal');

    zero.onclick = function(e){
        result.textContent = result.textContent + "0";
    }
    one.onclick = function(e){
        result.textContent = result.textContent + "1";
    }
    two.onclick = function(e){
        result.textContent = result.textContent + "2";
    }
    tree.onclick = function(e){
        result.textContent = result.textContent + "3";
    }
    four.onclick = function(e){
        result.textContent = result.textContent + "4";
    }
    five.onclick = function(e){
        result.textContent = result.textContent + "5";
    }
    six.onclick = function(e){
        result.textContent = result.textContent + "6";
    }
    seven.onclick = function(e){
        result.textContent = result.textContent + "7";
    }
    eight.onclick = function(e){
        result.textContent = result.textContent + "8";
    }
    nine.onclick = function(e){
        result.textContent = result.textContent + "9";
    }

    addition.onclick = function(e){
        opa = result.textContent;
        operation = "+";
        cleantext();
        
    }
    sustraction.onclick = function(e){
        opa = result.textContent;
        operation = "-";
        cleantext()
    }
    division.onclick = function(e){
        opa = result.textContent;
        operation = "/";
        cleantext()
    }
    multiplication.onclick = function(e){
        opa = result.textContent;
        operation = "*";
        cleantext()
    }
    clear.onclick = function(e){
        reset();
    }
    equal.onclick = function(e){
        opb = result.textContent;
        resu();
    }
}

function cleantext(){
    result.textContent = "";
}

function reset(){
    result.textContent = "";
    opa = 0;
    opb = 0;
    operation = "";
}

function resu(){
    var res = 0;
    switch(operation){
        case "+":
            res = parseFloat(opa) + parseFloat(opb);
        break;

        case "-":
            res = parseFloat(opa) - parseFloat(opb);
        break;
        
        case "/":
            res = parseFloat(opa) / parseFloat(opb);   
        break;

        case "*":
            res = parseFloat(opa) * parseFloat(opb);
        break;
    }
    reset();
    result.textContent = res;
}
