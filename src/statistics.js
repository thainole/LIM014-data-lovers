import {filterMedalla } from './data.js';
import data from './data/athletes/athletes.js';

 
// Declarando variables
const athletesData = data.athletes;
const homeButton = document.getElementById("home-button");
const champsButton = document.getElementById("champs-button"); 
/* const statsButton = document.getElementById("stats-button"); */


console.log("Medallas " , filterMedalla(athletesData,"Italy","Gold"));
console.log("Medallas " , filterMedalla(athletesData,"Italy","SIlver"));
console.log("Medallas " , filterMedalla(athletesData,"Italy","Bronze"));
 
 

// Fincionalidad de la barra de navegación
homeButton.addEventListener("click", homePage);
function homePage() {
    window.location.assign('./index.html');
}
 
champsButton.addEventListener("click", champsPage);
function champsPage () {
    window.location.assign('./index.html');
}

//Statistics HTML 
//let sumaDeMedallas =0;
//for(let i=0; i<=athletesData.length;i++){}
