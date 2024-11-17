// const NUME = [1,2,3,4,5,6,7];
// console.log(NUME);

// NUME[7]="8";
// NUME[8]="9";
// console.log(NUME);

// NUME.push("10");
// NUME.unshift("0");

// let NUM=0;
// while (NUM<6){
//     console.log(NUM);
//     NUM++
// }

// let Diner = 500;
// let Ttal=300;
// let Tgta=true;
// let Cheque=true;

// if (Diner>Ttal && Tgta || Cheque) {
//     console.log('Puedes pagar')
// } else {
//     console.log('No tienes dinero')
// }
//Función declarativa
// let nombre = "Walter"
// function saludar(nombre){
//     console.log(`Hola ${nombre}`);
// }
// saludar(nombre);

// const saludar =  (nombre)=> {
//     console.log(`Hola ${nombre}`);
// }

// const contenido = document.querySelector('.contenido');
// contenido.innerHTML=`Hola ${contenido}`;

// function sumar  (a,b){
//     return a+b;
// }

// let totalsuma =sumar(1,2);
// console.console.log(totalsuma);

// const Dsemana =["Lunes","Martes","Mercoles"];

// for (let i = 0; i < Dsemana.length; i++) {
//     console.log(i);    
// }
// //Bucle foreach
// Dsemana.forEach((dia) => {
//     console.log(dia);
// });
// //Bucle map
// const dia = Dsemana.map((i)=>i);
// console.log(dia);
//crea un nuevo array

// let DiasS = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
// const result = DiasS.findIndex(i=> i==="Jueves");
// console.log(result);

// const titulo = document.querySelector(`.titulo`);
// titulo.computedStyleMap.backgroundColor = "red";

// const contenido = document.getElementById(`.socials`);
// console.log(contenido)

// const titulo2 = document.querySelector(`.titulo`);
// console.log(titulo2);

// setInterval(()=>{
//     console.log("Hola");
// },8000);

// setTimeout(() => {
//     console.log("Hola loco")
// }, timeout);

// function Naleat(cantidad){
//     let array = [];
//     for(let W = 0; W < cantidad;W++){
//         let Num = Math.floor(Math.random()*100);
//         array.push(Num);
//         console.log(`Este es el array repetido ${array}`);
//     }
// }
// function Norde(array){
//     let Narray =[];
//     array.forEach(W => {
//         if(!Narray.includes(W));
//         Narray
//     });
// }

// const clik  = document.querySelectorAll(`.btn`);
// console.log(clik);

// clik.forEach((Boton) => {
//     Boton.addEventListener(`click`,()=>{
//         alert(`Hola`)
//     })
// });
// const Agregar = document.getElementById(`Agregar`);


// Taller _______________________________________________________________________


// Declarar variables nombre, edad, y ciudad e imprimirlas en la consola.
// let nombre = "Walter";
// let edad = 30;
// let ciudad = "Cartagena";
// console.log("Nombre: " + nombre);
// console.log("Edad: " + edad);
// console.log("Ciudad: " + ciudad);

// // Crear un bucle for que imprima los números del 1 al 10 y un bucle while que imprima los números del 1 al 10.
// for (let w = 0; w <=10; w++) {
//     console.log(w);
// }
// let e = 0;
// while (e <= 10) {
//     console.log(e);
//     e++;
// }

// // Crear una función que tome dos números como parámetros y devuelva su producto
// function sumar (a,b){
//     return a+b;
// }
// let resul = sumar(8,17);
// console.log(resul);

// // Convertir una función declarada en una función flecha. 
// const multiplicar = (a,b) => a * b;

// // Crea un nuevo array aplicando una función a cada elemento del array original
// const Num = [1,2,3,4,5,6];
// const Sum = x => x + 10;
// const result = Num.map(Sum);
// console.log(result);

// // Función en JavaScript declarativa
// function mostrarMensaje(mensaje) {
//     console.log(mensaje);
// }
// mostrarMensaje("Hola desde una función declarativa");

// // Función en JavaScript expresiva
// const mostrarMensajeExpresion = function(mensaje) {
//     console.log(mensaje);
// }
// mostrarMensajeExpresion("Hola desde una función de expresión");

// // Obtener elementos del DOM con querySelector
// const elemento = document.querySelector('.moto-1');
// console.log(elemento);

// // Obtener elementos del DOM con getElementById
// const elementoId = document.getElementById('elemtoId');
// console.log(elementoId);

// // Cambiar texto con `textContent`
// const titulo = document.getElementById('.Btn-1');
// titulo.textContent = "LOCO";


// Taller_____________________________________________________________________________________

const contenedor = document.querySelector('.moto-content');
const contenedorCarrito = document.getElementById('ListaCarrito');
console.log(contenedor);
let TotalCarrito=[];

const header = document.querySelector('.header');
console.log(header);

MostrarCarrito()
function MostrarCarrito(){
    const carrito = document.querySelector('.navbar img');
    carrito.addEventListener('click',()=>{
        console.log('diste click');
        const MiModal = new bootstrap.Modal(document.getElementById('MiModal'));
        MiModal.show();
    })

}

CargarCarrito()
function CargarCarrito(){
    contenedor.addEventListener('click',CargarProductos)
    console.log("Diste click en el contenedor");
}
function CargarProductos (e){
    if (e.target.classList.contains('agregar-carrito')){
        const ProductoSeleccionado=e.target.parentElement;
        leerDatos(ProductoSeleccionado);

        const button = e.target
        button.innerHTML="Agregando al carrito"

        setTimeout(()=>{
            button.innerHTML="Agregado al carrito" 
        },1000)

        setTimeout(()=>{
            button.innerHTML="Agregar al carrito" 
        },3000)
    }
}

function leerDatos(data) {
    console.log(data);

    const productos = {
        img : data.querySelector('img').src,
        nombre : data.querySelector('h3').textContent,
        precio : Math.floor(data.querySelector('p').innerText.replace(/[^0-9.-]+/g,"")),
        cantidad : 1,
        id : data.querySelector('button').getAttribute('data-id')
    };
    console.log(productos);
    const Existe = TotalCarrito.some(Producto=> Producto.id === productos.id);
    if (Existe) {
        TotalCarrito = TotalCarrito.map(Producto=>{
            if (Producto.id === productos.id) {
                Producto.cantidad++;
            }
            return Producto;
        })
    } else {
        TotalCarrito = [...TotalCarrito, productos];
    }
    ActualizarCarritoHtml();
}

function ActualizarCarritoHtml() {
    contenedorCarrito.innerHTML = ``;
    TotalCarrito.forEach(Producto => {
        const { img, nombre, precio, cantidad, id } = Producto;

        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src='${img}' width="50"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td><input type="number" value="${cantidad}" class="from-control ActualizarCantidad"></td>
        <td><a href="#" class="btn btn-danger eliminarProducto" data-id="${id}">X</a></td>
    `;
    contenedorCarrito.appendChild(row);
    const Eliminar = row.querySelector('.eliminarProducto');
    Eliminar.addEventListener('click',eliminarProducto);
    const ActualizarCantidadInput = row.querySelector('.ActualizarCantidad');
    })
    Total()
}

function eliminarProducto(e) {
    e.preventDefault();
    const id=e.target.getAttribute('data-id');
    console.log(id);
    TotalCarrito=TotalCarrito.map(Producto=>{
        if (Producto.id === id) {
            if (Producto.cantidad>1) {
                Producto.cantidad--;
            } else {
                return null
            }
        }
        return Producto
    }).
    
    TotalCarrito=TotalCarrito.filter(Producto => Producto !== null);
    console.log(TotalCarrito);
    ActualizarCarritoHtml() 
}

function Total () {
    const TotalProductos = TotalCarrito.reduce((Total,Producto)=>Total + (Producto.cantidad*Producto.precio),0);
    const TotalCarritoHTML = document.getElementById('Total-carrito');
    TotalCarritoHTML.innerHTML=`Total $${Math.floor(TotalProductos)}`
}

function ActualizarCantidad(e) {
    const id=e.target.getAttribute('data-id');
    const NuevaCantidad=parseInt(e.target.value);

    TotalCarrito=TotalCarrito.map((Producto)=>{
        if (Producto.id === id) {
            Producto.cantidad=NuevaCantidad;
        }
        return Producto
    })
    Total()
    ActualizarCarritoHtml();
}