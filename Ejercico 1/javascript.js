//Ejericio 1

//Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

//0 a 1.000 metros = pie

//1.000 a 10.000 metros = bicicleta

//10.000 a 30.000 metros = colectivo

//30.000 a 100.000 metros = auto

//+100.000 = avion


//EJERCICIO 1:

var m = prompt('Ingrese cuantos metros son: ')

if(m <= 1000){
    alert('El trasporte mas recomendado seria a pie');
}
else if(m <= 10000){
    alert('El trasporte mas recomendado seria en bicicleta');
}
else if(m <= 30000){
    alert('El trasporte mas recomendado seria en colectivo');
}
else if(m <= 100000){
    alert('El trasporte mas recomendado seria en auto');
}
else{
    alert('El trasporte mas recomendado seria en avion');
}

//EJERCICIO 2:


