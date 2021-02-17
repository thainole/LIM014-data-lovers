import { sortByAz, sortByZa, filterName, filterTeam, filterSport, filterEvent, mapTeam, mapSport, mapEvent, filterFemale, filterMale, filterMedalla, sortByTotal} from './data.js';
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

const medalsTeam =  mapTeam(athletesData);
const unitedTeam = [];



// Mostrar atletas en las tarjetas y pop up
const showAthletes = (data) => {
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 48) {
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
    const searchStringSport = selectSport.value; //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value; //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value; //
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

    const searchStringSport = selectSport.value; //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value; //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value; //
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
    const searchStringSport = selectSport.value; //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value; //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value; //
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
selectFemale.addEventListener("change", () => {
    const searchStringSport = selectSport.value; //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value; //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value; //
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
//gender: male
selectMale.addEventListener("change", () => {
    const searchStringSport = selectSport.value; //
    let filteredNames = filterSport(athletesData, searchStringSport);

    const searchStringTeam = selectTeam.value; //
    filteredNames = filterTeam(filteredNames, searchStringTeam);

    const searchStringEvent = selectEvent.value; //
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


// Tabla de medallas

medalsTeam.map(team => {
    if (unitedTeam.includes(team) === false){
        unitedTeam.push(team);
    }
    
})

//El forEach llena el objeto vacío que es object medals y se crean los keywords
let objMedals = []; 
console.log(unitedTeam);
unitedTeam.forEach((team) => { 
    let medallasOro = filterMedalla(athletesData, team,"Gold")
    let medallasSilver = filterMedalla(athletesData,team,"Silver")
    let medallasBronze = filterMedalla(athletesData,team,"Bronze")
    let total = medallasOro + medallasSilver + medallasBronze; 

    objMedals.push({country: team, 
                golden: medallasOro, 
                silver: medallasSilver, 
                bronze: medallasBronze, 
                total: total}
                )
});

/*El forEach pinta la tabla con los objetos ya creados*/
let objMedalsOrdered = sortByTotal(objMedals, 'dsc');

objMedalsOrdered.forEach((obj) => { 
    const container = document.createElement('tr');  
    const table = document.getElementById("bodytable");
    table.appendChild(container).innerHTML =
     `<tr> 
      <td> <strong>${obj.country}</strong> 
      </td><td>${obj.golden}</td>
      </td><td>${obj.silver}</td>
      </td><td>${obj.bronze}</td>
      </td><td>${obj.total}</td>
      </tr>` 
      
});

// Funcionalidad de la barra de navegación
homeButton.addEventListener("click", homePage);
anotherChampsButton.addEventListener("click", champsPage);
champsButton.addEventListener("click", champsPage);
womenButton.addEventListener("click", womenPage);
statsButton.addEventListener("click", statsPage);


function homePage() {
    document.querySelector(".home-main").style.display = "block";
    document.querySelector(".page-search").style.display = "none";
    document.querySelector(".stats-page").style.display = "none";
}


function womenPage() {
    let women = filterFemale(athletesData)

    console.log("click");
    document.querySelector(".page-search").style.display = "block";
    document.querySelector(".home-main").style.display = "none";
    document.querySelector(".stats-page").style.display = "none";
    resultsPage.innerHTML = ''
    showAthletes(women);

}


function champsPage() {
    document.querySelector(".page-search").style.display = "block";
    document.querySelector(".home-main").style.display = "none";
    document.querySelector(".stats-page").style.display = "none";
    resultsPage.innerHTML = ''
    showAthletes(athletesData);
}


function statsPage() {
    document.querySelector(".stats-page").style.display = "block";
    document.querySelector(".page-search").style.display = "none";
    document.querySelector(".home-main").style.display = "none";
}


