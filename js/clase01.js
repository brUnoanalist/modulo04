function ejecutar(){
    ///console.log("fuera")
}
var objeto ={
    ejecutar:function(){
        ///console.log("dentro")
    },
    comprobar: function(){
        ejecutar()
        this.ejecutar();
    }
}
objeto.comprobar();
///let m = (n,a)=> console.log(n+" "+a)
///m("bruno","fuenzalida")
var notas=[6.5,5.4,3.0,7.0]

for(i=0;i<notas.length;i++)
///console.log(notas[i])

///notas.map(n=>console.log(n))
var notasCopias=notas.slice();


for(i=0;i<notas.length;i++){
    notas[i]=notas[i]+0.2;

}
///console.table(notas);
notasCopias=notasCopias.map(n=>n+0.2);
//console.table(notasCopias)

var arregloA=["a","b","c","d"]
var arregloB=["e","f","g","h"]
for (i=0;i<arregloB.length;i++){
    ///arregloA.push(arregloB[i]);
    
    
}
console.log(arregloA);
console.log("hola")

arregloA.push(...arregloB)
console.log(arregloA)