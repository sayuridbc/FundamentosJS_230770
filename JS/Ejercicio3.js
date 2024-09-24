// objetos 


//imprimir el objeto 
//console.warn("---Objetos---");

//los objetos tambien ya pueden representarse en formato de tabla 
//console.table(producto);

//acceder a las propiedades de un objeto 
//console.warn("Leyendo las propiedades de un Objeto y sus tipos de datos")
//console.log(`El tipo de dato de nombre es: ${typeof(Nombre)}, Mac es del tipo: ${typeof(Marca)},Modelo es del tipo: ${typeof(Modelo)},costo de la compra es tipo: ${typeof(Costo_compra)},
//costo de venta es tipo: ${typeof(Costo_venta)}, Disponible es del tipo: ${typeof(Disponible)}`);


//objetos 
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,9) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg};color :white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold` 

const producto = 
{ 
    Nombre:"Tablet 9\"",
    Marca:"Mac",
    Modelo:"ipad",
    Precio:11500.25,
    Disponibilidad: 15,
    Stock: true,
    SKU: Symbol("Linkin Park"),
    Stock: 0,
    Barcode: null,
    Imagen: "sin imagen",
    Categoria: ["deporte","ropa"]
    
    
}

console.log("Repaso de Objetos en JavaScript");

console.log("%c1.- Variables independientes", style_console);

let Producto_Nombre = "Iphone pro Max  15\"";
let Producto_Marca = "Apple";
let Producto_Modelo = "pro Max";
let Producto_Precio= "20,000";
let Producto_Disponibilidad=true;
let Producto_SKU = Symbol("BACS230511-5FR");
let Producto_Stock= 15;
let Producto_Imagen = null;
let Producto_Barcode; 
let Producto_Categorias= ["Electronicos", "Hogar", "Accesorios","Ropa", "Tecnologia"];

console.log(`Los datos del Producto son:\n
    Nombre: ${Producto_Nombre}, su tipo de dato es <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, tipo de dato <${typeof(Producto_Marca)}> 
    Modelo: ${Producto_Modelo}, tipo de dato <${typeof(Producto_Modelo)}> 
    Precio: ${Producto_Precio}, tipo de dato <${typeof(Producto_Precio)}> 
    Disponibilidad: ${Producto_Disponibilidad}, tipo de dato <${typeof(Producto_Disponibilidad)}> 
    Stock: ${Producto_Stock}, tipo de dato <${typeof(Producto_Stock)}> 
    Barcode: ${Producto_Barcode}, tipo de dato <${typeof(Producto_Barcode)}> 
    Imagen: ${Producto_Imagen}, tipo de dato <${typeof(Producto_Imagen)}> 
    Marca: ${Producto_Marca}, tipo de dato <${typeof(Producto_Marca)}> 
    Categorias: ${Producto_Categorias}, tipo de dato <${typeof(Producto_Categorias)}>  `
);


console.log("En el caso del SKU al ser un symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));

console.log("%c2.- objeto", style_console);
let Producto =
{ 
    Nombre:"Tenis",
    Marca:"adidas",
    Modelo:"forum low",
    Precio:1500,
    Disponibilidad: 15,
    Stock: true,
    SKU: Symbol("Linkin Park"),
    Stock: 6,
    Barcode: null,
    Imagen: "sin imagen",
    Categoria: ["deporte","ropa","tenis"]
    
}

console.table(Producto)
 console.log("Accediendo a propiedades especificas del Producto")
 console.log(`Nombre completo del producto: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
 console.log(`Precio: ${Producto.Precio}`)
 if(Producto.Disponibilidad == 0)
    console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 ={

Clave:321,
Nombre: "Gorra",
Marca:"adidas",
Modelo:"sayy",
Precio:250,
Disponibilidad: true,
Stock:5,
SKU:"df256s",
Imagen: "cdsfge",
Barcode:12368,
Categorias: ["ropa"],
}
 let Comprador =
 {
    clave:445,
    Nombre:"Say",
    Apellidos:"Bautista",
    Tipo:"Frecuante",
    Correo:"2307@gb",
    PaisdeOrigen:"Mexico",
    SaldoActual:2000
 }

let pedido=
{
    producto_clave:345,
    comprador_clave:132,
    Cantidad:1,
    Estatus:"En espera",
    tipo_pago:"Transferencia"
}

let {Precio:Producto_Precio2}=Producto2;
let {Cantidad:pedido_Cantidad}=pedido;
let {SaldoActual:cliente_SaldoActual}=Comprador;
let Costo_compra=Producto_Precio2 * pedido_Cantidad;

console.log=(`El cliente ha agregado a su carrito de compras ${pedido_Cantidad} Unidades con un costo total de: ${Costo_compra}`)
if(Costo_compra<cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente");

console.log("%c4.- Actualización de los valores de las propiedades")