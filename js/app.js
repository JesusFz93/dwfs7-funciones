const txtLimite = document.getElementById("txtLimite");

const fizzbuzz = (limite) => {
  for (let i = 1; i <= limite; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

const ejecutar = () => {
  fizzbuzz(txtLimite.value);
};

const cambioTexto = () => {
  console.log("Se detecto un cambio");
};

const validarCampo = () => {
  if (txtLimite.value === "") {
    console.log("Este campo es obligatorio");
  }
};

const entrarcontrol = () => {
  console.log("OnFocus");
};

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// let a = 50;
// let b = 100;
// let c = 0;

// const sumar = (param1, param2, ejec) => {
//   console.log(`Ejecucion ${ejec}`);
//   let c = param1 + param2;
//   console.log(c);
// };

// sumar(50, 100, 1);
// sumar(200, 300, 2);
// sumar(500, 300, 3);

// function sumar () {

// }

// console.log("Ejecucion 1");
// c = a + b;
// console.log(c);

// a = 200;
// b = 300;

// console.log("Ejecucion 2");
// c = a + b;
// console.log(c);

// a = 500;
// b = 300;

// console.log("Ejecucion 3");
// c = a + b;
// console.log(c);
