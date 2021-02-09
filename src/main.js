import { filterTeam, filterSport, filterGender, mapTeam, mapSport, sortByName} from './data.js';
import data from './data/athletes/athletes.js';

const athletesData = data.athletes;


// Lista de países en orden alfabético
const repeatedTeams = mapTeam(athletesData);
const teams = [...new Set(repeatedTeams)].sort((a,b) => a > b ? 1 : -1);
console.log(teams);

// Poner los países en el botón de select
const selectTeam = document.getElementById("select-team");


// Lista de deportes en orden alfabético
const repeatedSports = mapSport(athletesData);
const sports = [...new Set(repeatedSports)].sort((a,b) => a > b ? 1 : -1);
console.log(sports);




// Mostrar atletas en las tarjetas
let resultsPage = document.querySelector(".page-search__main__results-area__grid");

let showAthletes = (data) => {
    resultsPage.innerHTML="";
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 40) {
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
            <div class="card__read-more">
                <button>Read more</button>
            </div>
            </div>`;
        };
    });
    return showAthletes;
}
showAthletes(athletesData);

//Ver info completa del participante
const readMore = document.querySelector(".card__read-more");
let popUp = document.querySelector(".page-search__pop-up-wrapper");
readMore.addEventListener("click", () => {
    popUp.style.display = "block"
});
const popUpClose = document.querySelector(".page-search__pop-up-close");
popUpClose.addEventListener("click", () => {
    popUp.style.display = "none";
})
popUp.addEventListener("click", e => {
    if (e.target.className === "page-search__pop-up-wrapper") {
        popUp.style.display = "none";
    }
}) 
let popUpContent = document.querySelector(".page-search__pop-up-content");
let showAthletesFullData = (data) => {
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 40) {
            popUpContent.innerHTML=`
            <div class="card__title">${athletes.name}</div>
            <div class="card__content">
                <li>Gender: ${athletes.gender}</li>
                <li>Height: ${athletes.height}</li>
                <li>Weight: ${athletes.weight}</li>
                <li>Sport: ${athletes.sport}</li>
                <li>Team: ${athletes.team}</li>
                <li>Noc: ${athletes.noc}</li>
                <li>Age: ${athletes.age}</li>
                <li>Event: ${athletes.event}</li>
                <li>Medal: ${athletes.medal}</li>        
            </div>    
        `;
        };
    });
    return showAthletesFullData;
}
showAthletesFullData(athletesData)



// Ordenar de la A-Z 
const az = document.getElementById("a-z");
const za = document.getElementById("z-a");


// Filtrar por género 
console.log(filterGender(athletesData, "F"));
console.log(filterGender(athletesData, "M"));


// Consola para verificar que funcionen los filtros
console.log(filterTeam(athletesData,"Italy"));
console.log(filterSport(athletesData, "Handball"));
//console.log(sortByName(athletesData));



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