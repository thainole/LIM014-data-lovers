import {filterMedalla, filterTeam, filterSport, filterGender, mapTeam, mapSport, sortByName } from './data.js';
import data from './data/athletes/athletes.js';

 
// Declarando variables
const athletesData = data.athletes;
let popUp = document.querySelector(".page-search__pop-up-wrapper");
let popUpContent = document.querySelector(".page-search__pop-up-content");
const popUpClose = document.querySelector(".page-search__pop-up-close");
const homeButton = document.getElementById("home-button");
const statsButton = document.getElementById("stats-button");
const champsButton = document.getElementById("champs-button");
const anotherChampsButton = document.getElementById("another-champs-button");

filterMedalla(athletesData,"Jordan","Gold");

// Mostrar atletas en las tarjetas y pop up
let resultsPage = document.querySelector(".page-search__main__results-area__grid");

let showAthletes = (data) => {
    resultsPage.innerHTML = "";
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 40) {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
            <div class="card__title">
                ${athletes.name}
            </div>
            <ul class="card__content">
                <li>Gender: ${athletes.gender}</li>
                <li>Team: ${athletes.team}</li>
                <li>Sport: ${athletes.sport}</li>
            </ul>
            <div class="card__read-more flex-center">
                <button>Read more</button>
            </div>`;
            resultsPage.appendChild(div)
            const readMore = div.querySelector(".card__read-more");

            readMore.addEventListener("click", () => {
                popUp.style.display = "block";
                popUpContent.innerHTML =showAthletesFullData(athletes);
            });
        };
    });
    return showAthletes;
}
showAthletes(athletesData);

popUpClose.addEventListener("click", () => {
    popUp.style.display = "none";
})
popUp.addEventListener("click", e => {
    if (e.target.className === "page-search__pop-up-wrapper") {
        popUp.style.display = "none";
    }
})

let showAthletesFullData = (athletes) => {
    let content = `
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
            </div>`;
    return content;
};


// Lista de países en orden alfabético
const repeatedTeams = mapTeam(athletesData);
const teams = [...new Set(repeatedTeams)].sort((a, b) => a > b ? 1 : -1);
console.log(teams);


// Lista de deportes en orden alfabético
const repeatedSports = mapSport(athletesData);
const sports = [...new Set(repeatedSports)].sort((a, b) => a > b ? 1 : -1);
console.log(sports);


// Consola para verificar que funcionen los filtros
console.log(filterTeam(athletesData, "Italy"));
console.log(filterSport(athletesData, "Handball"));
console.log(sortByName(athletesData));
console.log(filterGender(athletesData, "F"));
console.log(filterGender(athletesData, "M"));


// Fincionalidad de la barra de navegación
homeButton.addEventListener("click", homePage);
function homePage() {
    window.location.assign('./index.html');
    document.querySelector("home-main").style.display = "bloxk";
    document.querySelector(".page-search").style.display = "none";

}

anotherChampsButton.addEventListener("click", champsPage);
champsButton.addEventListener("click", champsPage);
function champsPage () {
    document.querySelector(".page.search").style.display = "block";
    document.querySelector(".home-main").style.display = "none"
    window.location.assign('./index.html');

}
statsButton.addEventListener("click", statsPage);
function statsPage () {
    window.location.assign('./statistics.html');

}

//Statistics HTML 
//let sumaDeMedallas =0;
//for(let i=0; i<=athletesData.length;i++){}

//Dibujar tabla
const $bodytable = document.querySelector("#bodytable");
//Recorrer la data
data.forEach(data=>{
    //Crear un <tr>
    const $tr = document.createElement("tr");
    //Crear el <td> de Country y se une con el tr
    let $tdCountry = document.createElement("td");
    $tdCountry.textContent = team.country; 
    $tr.appendChild($tdCountry);
    //Td de medalla de oro 
    let $tdGolden = document.createElement("td");
    $tdGolden.textContent = golden.golden;
    $tr.appendChild($tdGolden)
    //td de medalla de plata
    let $tdSilver = document.createElement("td");
    $tdSilver.textContent = silver.silver;
    $tr.appendChild($tdSilver)
    //td de medalla de bronce
    let $tdBronze = document.createElement("td");
    $tdBronze.textContent = bronze.bronze;
    $tr.appendChild($tdBronze);
    //<tr> se agrega al cuerpo de la tabla 
    $bodytable.appendChild($tr);
});
