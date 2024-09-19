// objetos 

const producto = 
{ 
    Nombre:"Tablet 9\"",
    Marca:"Mac",
    Modelo:"ipad",
    Costo_compra:11500.25,
    Costo_venta: 15400,
    Disponible: true,
    SKU: Symbol("Linkin Park"),
    colores: ["Blanco","Negro","Rosa","Azul","Amarillo"]
}

//imprimir el objeto 
console.warn("---Objetos---");

//los objetos tambien ya pueden representarse en formato de tabla 
console.table(producto);

//acceder a las propiedades de un objeto 
console.warn("Leyendo las propiedades de un Objeto y sus tipos de datos")
console.log(`El tipo de dato de nombre es: ${typeof(Nombre)}, Mac es del tipo: ${typeof(Marca)},Modelo es del tipo: ${typeof(Modelo)},costo de la compra es tipo: ${typeof(Costo_compra)},
costo de venta es tipo: ${typeof(Costo_venta)}, Disponible es del tipo: ${typeof(Disponible)}`);
