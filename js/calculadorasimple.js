function igual(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado");
    var op = document.getElementById("op").value;

    if(op == "+"){
        resultado.innerHTML= parseInt(numero1) + parseInt(numero2);
    }
    if(op == "-"){
        resultado.innerHTML= parseInt(numero1) - parseInt(numero2);
    }
    if(op == "*"){
        resultado.innerHTML= parseInt(numero1) * parseInt(numero2);
    }
    if(op == "/"){
        resultado.innerHTML= parseInt(numero1) / parseInt(numero2);
    }
    
}