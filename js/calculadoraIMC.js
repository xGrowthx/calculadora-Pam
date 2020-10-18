function calcIMC() {

    var peso = Number(document.getElementById("fPeso").value);

    var altura = Number(document.getElementById("fAltura").value);
   
    resultadoIMC = peso / ( altura * altura );


    document.getElementById("resultado").innerHTML = resultadoIMC.toFixed(2);
    
}