import { filterTeam, filterSport, mapTeam, mapSport, sortByName} from './data.js';
import data from './data/athletes/athletes.js';

const athletesData = data.athletes;


// Lista de países en orden alfabético
const repeatedTeams = mapTeam(athletesData);
const teams = [...new Set(repeatedTeams)].sort((a,b) => a > b ? 1 : -1);
console.log(teams);


// Lista de deportes en orden alfabético
const repeatedSports = mapSport(athletesData);
const sports = [...new Set(repeatedSports)].sort((a,b) => a > b ? 1 : -1);
console.log(sports);


// Mostrar atletas en las tarjetas
const resultsPage = document.querySelector(".page-search__main__results-area__grid");

const showAthletes = (data) => {
    resultsPage.innerHTML="";
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 30) {
            resultsPage.innerHTML += `
            <div class="card">
            <div class="card__title">
                ${athletes.name}
            </div>
            <ul class="card__content">
                <li>Gender: ${athletes.gender}</li>
                <li>Team: ${athletes.team}</li>
                <li>Sport: ${athletes.sport}</li>
            </ul>
            </div>`;
        };
    });
    return showAthletes;
}
showAthletes(athletesData);


// Consola para verificar que funcionen los filtros
console.log(filterTeam(athletesData,"Italy"));
console.log(filterSport(athletesData, "Handball"));
console.log(sortByName(athletesData));


// FUNCIONALIDAD BOTONES DE LA BARRA DE NAVEGACIÓN
const homeButton = document.getElementById("home-button");
const champsButton = document.getElementById("champs-button");
const anotherChampsButton = document.getElementById("another-champs-button");
/* const statsButton = document.getElementById("stats-button"); */

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

