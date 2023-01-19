function hello3(name){
    return 'Hola' + name;
}

console.log(hello3('Luis'));
console.log(hello3());

//funcion va a dar nah por que los valores no
//estan indefinido

function agregar(x, y){
    return x + y;
}
console.log(agregar());
console.log(agregar(4,5));


//Parametors por default
function agregar2(x, y){
    if (y === undefiend){
        y = 0;
    }else if(x === undefined){
        x = 0;
    }else if(x === undefined && y == undefined){
        return 0;
    }
    return x + y;
}

function agregar3(x , y=1, z=2){
return x + y * z;
}

console.log(agregar3(5));

//Funciones de flecha
function sumar(){
return 3 + 4;
}
const suma = () => 3 + 4;


console.log(sumar());
console.log(suma());


function f1(x){
    return "Hola soy: " + x;

}

const f1a = x => "Hola soy: " + x;

console.log(f1("Gallardo"));
console.log(f1a("Armando"));

function factorial (n){
        i = 1;
        fact = 1;

        while(i<=n){
            fact*=i;
            i++;
        }

        return fact;
}

const fact = n => {
    if(n==0)
}