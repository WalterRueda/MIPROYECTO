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

const clik  = document.querySelectorAll(`.btn`);
console.log(clik);

clik.forEach((Boton) => {
    Boton.addEventListener(`click`,()=>{
        alert(`Hola`)
    })
});
const Agregar = document.getElementById(`Agregar`);
 

