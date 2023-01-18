function saludo(){
    console.log("Hola 1")
}

saludo();

function saludo2(){
    return 'Hola 2'
}

const result = saludo2();
console.log(result);

function saludo3(){
    return function (){
        return 'Hola 3'
    }
}

console.log(saludo3()());