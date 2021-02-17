import { sortByAz, sortByZa, filterName, filterTeam, filterSport, filterEvent, mapTeam, mapSport, mapEvent, mapFemale, filterFemale, filterMale } from './data.js';
import data from './data/athletes/athletes.js';


// Declarando variables
const athletesData = data.athletes;
const resultsPage = document.querySelector(".page-search__main__results-area__grid");
const popUp = document.querySelector(".page-search__pop-up-wrapper");
const popUpContent = document.querySelector(".page-search__pop-up-content");
const popUpClose = document.querySelector(".page-search__pop-up-close");
const homeButton = document.getElementById("home-button");
const statsButton = document.getElementById("stats-button");
const champsButton = document.getElementById("champs-button");
const anotherChampsButton = document.getElementById("another-champs-button");
const womenButton = document.getElementById("womenButton");

const repeatedTeams = mapTeam(athletesData);
const repeatedSports = mapSport(athletesData);
const repeatedEvents = mapEvent(athletesData);

const selectTeam = document.getElementById("select-team");
const selectSport = document.getElementById("select-sport");
const selectEvent = document.getElementById("select-event");
const selectFemale = document.getElementById("check-female");
const selectMale = document.getElementById("check-male");

const searchBar = document.querySelector("#search-bar");
const selectOrder = document.querySelector(".select--order");



// Mostrar atletas en las tarjetas y pop up
const showAthletes = (data) => {
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 100) {
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
                popUpContent.innerHTML = showAthletesFullData(athletes);
            });
        }
    });
    return showAthletes;
}

popUpClose.addEventListener("click", () => {
    popUp.style.display = "none";
})
popUp.addEventListener("click", e => {
    if (e.target.className === "page-search__pop-up-wrapper") {
        popUp.style.display = "none";
    }
})

const showAthletesFullData = (athletes) => {
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

let teams = new Set(repeatedTeams);
let sports = new Set(repeatedSports);
let events = new Set(repeatedEvents)

// Crear listas de opciones (teams y sports)
teams = [...teams].sort((a, b) => a > b ? 1 : -1);
sports = [...sports].sort((a, b) => a > b ? 1 : -1);
events = [...events].sort((a, b) => a > b ? 1 : -1);


function listOfOptions(selectCategory, list) {
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option"),
            txt = document.createTextNode(list[i]);
        option.appendChild(txt);
        selectCategory.insertBefore(option, selectCategory.lastChild);
    }
}

listOfOptions(selectTeam, teams);
listOfOptions(selectSport, sports);
listOfOptions(selectEvent, events);



// Team (country) selection
selectTeam.addEventListener("change", () => {
    const searchStringSport = selectSport.value.toLowerCase(); //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value.toLowerCase(); //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value.toLowerCase(); //
    filteredNames = filterEvent(filteredNames, searchStringEvent);


    if (selectFemale.checked && !selectMale.checked) {
        filteredNames = filterFemale(filteredNames);
    }

    if (selectMale.checked && !selectFemale.checked) {
        filteredNames = filterMale(filteredNames);
    }


    if (filteredNames.length == 0) {
        resultsPage.textContent = "No matches found. Try with another name";
    } else {
        resultsPage.innerHTML = "";
        showAthletes(filteredNames);
    }
});

//Sport selection
selectSport.addEventListener("change", () => {

    const searchStringSport = selectSport.value.toLowerCase(); //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value.toLowerCase(); //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value.toLowerCase(); //
    filteredNames = filterEvent(filteredNames, searchStringEvent);

    if (selectFemale.checked && !selectMale.checked) {
        filteredNames = filterFemale(filteredNames);
    }

    if (selectMale.checked && !selectFemale.checked) {
        filteredNames = filterMale(filteredNames);
    }


    if (filteredNames.length == 0) {
        resultsPage.textContent = "No matches found. Try with another name";
    } else {
        resultsPage.innerHTML = "";
        showAthletes(filteredNames);
    }
});

//selectEvent
selectEvent.addEventListener("change", () => {
    const searchStringSport = selectSport.value.toLowerCase(); //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value.toLowerCase(); //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value.toLowerCase(); //
    filteredNames = filterEvent(filteredNames, searchStringEvent);

    if (selectFemale.checked && !selectMale.checked) {
        filteredNames = filterFemale(filteredNames);
    }

    if (selectMale.checked && !selectFemale.checked) {
        filteredNames = filterMale(filteredNames);
    }


    if (filteredNames.length == 0) {
        resultsPage.textContent = "No matches found. Try with another name";
    } else {
        resultsPage.innerHTML = "";
        showAthletes(filteredNames);
    }
});
//gender selection
//gender: female
selectFemale.addEventListener("change", selectFemaleFunction);

function selectFemaleFunction() {
    const searchStringSport = selectSport.value.toLowerCase(); //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value.toLowerCase(); //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value.toLowerCase(); //
    filteredNames = filterEvent(filteredNames, searchStringEvent);

    if (selectFemale.checked && !selectMale.checked) {
        filteredNames = filterFemale(filteredNames);
    }

    if (selectMale.checked && !selectFemale.checked) {
        filteredNames = filterMale(filteredNames);
    }


    if (filteredNames.length == 0) {
        resultsPage.textContent = "No matches found. Try with another name";
    } else {
        resultsPage.innerHTML = "";
        showAthletes(filteredNames);
    }
};
//gender: male
selectMale.addEventListener("change", () => {
    const searchStringSport = selectSport.value.toLowerCase(); //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value.toLowerCase(); //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value.toLowerCase(); //
    filteredNames = filterEvent(filteredNames, searchStringEvent);

    if (selectFemale.checked && !selectMale.checked) {
        filteredNames = filterFemale(filteredNames);
    }

    if (selectMale.checked && !selectFemale.checked) {
        filteredNames = filterMale(filteredNames);
    }


    if (filteredNames.length == 0) {
        resultsPage.textContent = "No matches found. Try with another name";
    } else {
        resultsPage.innerHTML = "";
        showAthletes(filteredNames);
    }
});


// Barra de búsqueda
searchBar.addEventListener("input", () => {
    //set selected value of DropDown inputs to "" or ALL

    const searchString = searchBar.value.toLowerCase(); //
    const filteredNames = filterName(athletesData, searchString);
    if (filteredNames.length == 0) {
        resultsPage.textContent = "No matches found. Try with another name";
    } else {
        resultsPage.innerHTML = "";
        showAthletes(filteredNames);
    }
});



// Ordenar por nombre
selectOrder.addEventListener("change", () => {
    if (selectOrder.value == "a-z") {
        resultsPage.innerHTML = "";
        showAthletes(sortByAz(athletesData));
    } else if (selectOrder.value == "z-a") {
        resultsPage.innerHTML = "";
        showAthletes(sortByZa(athletesData));
    }
});



// Funcionalidad de la barra de navegación
homeButton.addEventListener("click", homePage);

function homePage() {
    document.querySelector(".home-main").style.display = "block";
    document.querySelector(".page-search").style.display = "none";
}

anotherChampsButton.addEventListener("click", champsPage);
champsButton.addEventListener("click", champsPage);

//women button
womenButton.addEventListener("click", womenPage);

function womenPage() {
    let women = filterFemale(athletesData)

    console.log("click");
    document.querySelector(".page-search").style.display = "block";
    document.querySelector(".home-main").style.display = "none";
    resultsPage.innerHTML = ''
    showAthletes(women);

}
//


function champsPage() {
    document.querySelector(".page-search").style.display = "block";
    document.querySelector(".home-main").style.display = "none";
    resultsPage.innerHTML = ''
    showAthletes(athletesData);
}

statsButton.addEventListener("click", statsPage);

function statsPage() {
    window.location.assign('./statistics.html');
}
