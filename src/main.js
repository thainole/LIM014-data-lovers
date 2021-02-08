import { filterTeam, filterSport, mapTeams } from './data.js';
//cuando agregue una función, tengo que incluirla aquí uwu
import data from './data/athletes/athletes.js';

const athletesData = data.athletes;

// let card = document.querySelectorAll(".card");
  /*
function showAthletes (data) {

    let counter = 0;
    data.forEach(athletes => {
        counter++;
        if (counter <= 9) {
            card.innerHTML += `
            <div class="card__title">
            ${athletes.name}
            </div>
            <ul class="card__content">
            <li>Sport: ${athletes.sport}</li>
            <li>Team: ${athletes.team}</li>
            <li>Gender: ${athletes.gender}</li>
            </ul>
            `;
        }
    });
    return showAthletes;
} 
showAthletes(athletesData);

console.log(filterTeam(athletesData,"Italy"));
console.log(filterSport(athletesData, "Handball"));

// Lista de países 
const repeatedTeams = mapTeams(athletesData);
const teams = [...new Set(repeatedTeams)];
console.log(teams);
//const selectTeam = document.querySelector("#team").value;*/



// FUNCIONALIDAD BOTONES DE LA BARRA DE NAVEGACIÓN
const homeButton = document.getElementById("home-button");
const champsButton = document.getElementById("champs-button");
const anotherChampsButton = document.getElementById("another-champs-button");
// const statsButton = document.getElementById("stats-button");

homeButton.addEventListener("click", homePage);
function homePage () {
    document.querySelector(".home-main").style.display="block";
    document.querySelector(".page-search").style.display="none";
}

anotherChampsButton.addEventListener("click", champsPage);
champsButton.addEventListener("click", champsPage);
function champsPage () {
    document.querySelector(".page-search").style.display="block"
    document.querySelector(".home-main").style.display="none";
}

