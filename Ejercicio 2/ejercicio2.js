//Ejericio 2

//Crear el código que reciba como parámetro un array de números y devuelva el mayor.

var num = [2,6,10,40,2,80];
var numMayor = 0;
 
for(n = 0; n < num.length; n++){
    if (num[n] > numMayor)
    {
        numMayor = num[n];
    }
}
alert ('Los numeros del arreglo son: ' + num);
alert('El numero mayor es el: '+ numMayor)
