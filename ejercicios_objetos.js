function  formula(base,altura){
   this.base=base;
   this.altura=altura;
}
 var rectangulo =new formula(24,6);
 var resultado = rectangulo.base*rectangulo.altura;
 document.write(resultado);

 function caracter(nombre,dia,mes,andeNac,anioActual){
   this.nombre=nombre;
    this.dia=dia;
    this.mes=mes;
    this.andeNac=andeNac;
   this.anioActual=anioActual;
 }
 var resultado=new caracter("Su",23,8,1991,2017);
 var edad=resultado.anioActual-resultado.andeNac;
 var res="La edad actual de " +resultado.nombre +" es "+  edad;

 document.write(res);
 function persona(nombre,edad,pasatiempo){
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
}
 var ejercicio3 = new persona("Diana",17,"Dibujar");
 var resultado = " hola soy " + ejercicio3.nombre +" tengo "+ ejercicio3.edad + " años y me gusta " + ejercicio3.pasatiempo;
 document.write(resultado);
