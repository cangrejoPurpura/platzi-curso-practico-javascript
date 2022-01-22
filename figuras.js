// Código del Cuadrado

console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado){
   return ladoCuadrado * 4;
} 
function areaCuadrado(ladoCuadrado){
   return ladoCuadrado * ladoCuadrado;
}
console.groupEnd();





// Código del Triángulo

console.group("Triángulos");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2){
   return ladoTriangulo1 + ladoTriangulo2;
}
function areaTriangulo(baseTriangulo, alturaTriangulo){
   return (baseTriangulo * alturaTriangulo) / 2;
}
console.groupEnd();





// Código de círculo

console.group("Círculos");

// Diámetro
function diametroCirculo(radioCirculo){
   return radioCirculo * 2;
}
// PI
const PI = Math.PI;
// Circunferencia
function perimetroCirculo(radio) {
   const diametroCirculo = radio * 2;
   return diametroCirculo * Math.PI;
} 
// Área
function areaCirculo(radio){
   return (radioCirculo * radioCirculo) * PI;
}
console.groupEnd();





// Acá interactuamos con HTML

// Cuadrado
function calcularPerimetroCuadrado(){
   const input = document.getElementById("input-cuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   alert(perimetro);
}

function calcularAreaCuadrado(){
   const input = document.getElementById("input-cuadrado");
   const value = input.value;

   const area = areaCuadrado(value);
   alert(area);
}





// Triangulo
function calcularPerimetroTriangulo(){
   const input = document.getElementById("input-triangulo");
   const value = input.value;

   const perimetro = perimetroTriangulo(value);
   alert(perimetro);
}

function calcularAreaTriangulo(){
   const input = document.getElementById("input-triangulo");
   const value = input.value;

   const area = areaTriangulo(value);
   alert(area);
}





// Circulo 
function calcularPerimetroCirculo(){
   const input = document.getElementById("input-circulo");
   const value = input.value;

   const perimetro = perimetroCirculo(value);
   alert(perimetro);
}

function calcularAreaCirculo(){
   const input = document.getElementById("input-circulo");
   const value = input.value;

   const area = areaCirculo(value);
   alert(area);
}