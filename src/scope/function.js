function saludo() {
    let userName = 'Carlos'; // function scope, definida de manera local solo es accecible en la misma funcion.
    console.log(userName);

    if(userName === 'Carlos') {
        console.log(`Hello ${userName}!`)
    }
}
saludo();
console.log(userName);