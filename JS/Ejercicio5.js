//Repaso de Ciclo y Sentencias de control 
//Estilizacion de los mensajes de salida 
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//personalizacion de  las salidas a consola 
console.warn("Practica 07: Arreglos en Java Script")

console.log("%c1.- Condicionales- Si/Entonces ... (if)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba logica de verdadero o falso 
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//Y si necesitamos en formato local?
const fechaLocalMX= fechaActual.toLocaleDateString(`es-mx`,
    {
        weekday: `long`, 
        year: `numeric`, 
        month:`long`,
        day: `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        hour12:false
    });

    console.log(`En formato local (México): ${fechaLocalMX}`); 

    //si es antes de las doce saluda con buenos dias 
    if (fechaActual.getHours()<12)
        console.log(`Buenos días, hoy es: ${fechaLocalMX}`); 

    //  Existe un extensor de la sentencia if(si) que es else (en caso contrario)
    if(fechaActual.getMonth()<=6)
        console.log(`Estas en la primera mitad del año.`); 
    else 
    console.log(`Estas en la segunda mitad del año.`)

    //Que pasa si la validacion tiene varias operaciones 
    const anio = fechaActual.getFullYear();

    let inicioPrimavera = new Date(anio, 2,21); 
    let inicioVerano = new Date(anio, 5,21);
    let inicioOtono = new Date(anio, 8,23); 
    let inicioInvierno = new Date(anio, 11,21); 
    let estacion; 
    let horarioVerano= false; 
    
    if(fechaActual >= inicioPrimavera && fechaActual < inicioVerano)
    {
        console.log("Estamos en PRIMAVERA...")
        console.log("Inicia la Floración de muchas plantas...")
        console.log("Los días son mas largos y las noches mas cortas...")
        console.log("Muchos animales despiertan de la hibernación...")
        estacion="Primavera"
        horarioVerano=true;
    }
    else if(fechaActual >= inicioVerano && fechaActual < inicioOtono){
        console.log("Estamos en VERANO...")
        console.log("En esta remporada abundan los días soleados y calurosos...")
        console.log("El indice del turismo vacacional sube...")
        console.log("Mucha gente busca realizar actividades al aire libre...")
        estacion="Verano"
        horarioVerano= true;
    }
else if (fechaActual >= inicioOtono && fechaActual < inicioInvierno){
    console.log("Estamos en OTOÑO...")
    console.log("Los arboles empiezan a cambiar de follaje...")
    console.log("Se registran temperaturas templadas...")
    console.log("Los animales comienzan con la recoleccion de alimento y preparan sus espacio para la hibernacion...")
    estacion= "Otoño"
    horarioVerano = false;
}
else{
    console.log("Estamos en INVIERNO...")
    console.log("En esta estacion los dias son mas cortos y las noches mas largas...")
    console.log("En algunas regiones del planeta suelen nevar...")
    console.log("Dado a las bajas temperaturas, lo recomendado es abrigarse...")
    estacion= "Invierno"
    horarioVerano= false;
}

console.log("%c2.- Operador Ternario (Validacion:cumple:no_cumple", style_console);
const edadPersona = 20; 
const mayoreEdadMX= 18;
const mayorEdadUS= 21;

let evauluarMayorEdad = (Edad) => edad >= ? "Eres mayor de edad":"No eres mayor de edad"
console.log("Evaluando la mayoria de edad")