let sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2)
}
let restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2)
}
let division = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2)
}
let multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2)
}

let operacion = prompt ("Elije la operacion a realizar: 1-suma 2-resta 3-division 4-multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("elije el primer número.");
    let numero2 = prompt("elije el segundo número.");
    resultado = sumar(numero1,numero2);
    document.write("La suma de ambos numeros es: "+resultado);
}else if (operacion == 2){
    let numero1 = prompt("elije el primer número.");
    let numero2 = prompt("elije el segundo número.");
    resultado = restar(numero1,numero2);
    document.write("La resta de ambos numeros es: "+resultado);
}else if (operacion == 3){
    let numero1 = prompt("elije el primer número.");
    let numero2 = prompt("elije el segundo número.");
    resultado = division(numero1,numero2);
    document.write("La division de ambos numeros es: "+resultado);
}else if (operacion == 4){
    let numero1 = prompt("elije el primer número.");
    let numero2 = prompt("elije el segundo número.");
    resultado = multiplicar(numero1,numero2);
    document.write("La multiplicacion de ambos numeros es: "+resultado);
}else{
    alert("No elegiste una operacion existente.");
}