const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // function interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }
    return parent();
}
myFunction();

// Son ejemplos de los closure y en este caso es una alcancia, el cual guarda los datos que le manden (monedas).

function sumWithClosure(firstNum) {
    let a = firstNum;
    return function (secondNum) {
      let b = secondNum;
      if (!b) {
        return a;
      } else {
        return a + b;
      }
    }
  }

  function sumWithClosure2(primerNumero) {
    return function (segundoNumero) {
        if (segundoNumero) {
        return primerNumero + segundoNumero;
        }
        return primerNumero;
    };
  }