//* Este es el codigo para el cuadrado

console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = (lado) => lado * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = (lado) => lado * lado;
// console.log("El Area del cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd();

//* Codigo del triangulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "los lados de triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = (lado1, lado2, baseTriangulo) =>
  lado1 + lado2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (base, altura) => (base * altura) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//* Codigo del circulo

console.group("Circulos");

//* Radio
// const radioCirculo = 4;
// console.log("El radio del circulo: " + radioCirculo + "cm");

//* Diametro
const diametroCirculo = (radio) => radio * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//* PI
const PI = Math.PI;
console.log("PI es: " + PI);

//* Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//* Area
const areaCirculo = (radio) => radio * radio * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

//* Interactuando con el HTML:

//! Calcular el cuadrado:
const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
};
const calcularAreaCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
};

//! Calcular el triangulo:
const calcularPerimetroTriangulo = () => {
  const lado1 = document.getElementById("tLado1");
  const vLado1 = parseFloat(lado1.value);

  const lado2 = document.getElementById("tLado2");
  const vLado2 = parseFloat(lado2.value);

  const base = document.getElementById("tBase");
  const vBase = parseFloat(base.value);

  const perimetro = perimetroTriangulo(vLado1, vLado2, vBase);
  alert(perimetro);
};
const calcularAreaTriangulo = () => {
  const base = document.getElementById("tBase");
  const tBase = parseFloat(base.value);

  const altura = document.getElementById("tAltura");
  const tAltura = parseFloat(altura.value);

  const area = areaTriangulo(tBase, tAltura);
  alert(area);
};

//! Calcular el circulo:
const calcularDiametro = () => {
  const radio = document.getElementById("radio");
  const vRadio = parseFloat(radio.value);

  const diametro = diametroCirculo(vRadio);
  alert(diametro);
};
const calcularCircunferencia = () => {
  const radio = document.getElementById("radio");
  const vRadio = parseFloat(radio.value);

  const circunferencia = perimetroCirculo(vRadio);
  alert(circunferencia);
};
const calcularAreaCirculo = () => {
  const radio = document.getElementById("radio");
  const vRadio = parseFloat(radio.value);

  const area = areaCirculo(vRadio);
  alert(area);
};

const calcularAlturaTriangulo = () => {
  const tilado1 = document.getElementById("tiLado1");
  const vLado1 = parseFloat(tilado1.value);

  const tilado2 = document.getElementById("tiLado2");
  const vLado2 = parseFloat(tilado2.value);

  const tibase = document.getElementById("tiBase");
  const tBase = parseFloat(tibase.value);

  const funcAltura = (lado1, lado2, base) => {
    if (lado1 === lado2 && lado1 != base) {
      alert(Math.sqrt(lado1 ** 2 - base ** 2 / 4));
    }
  };

  funcAltura(vLado1, vLado2, tBase);
};
