import {filterMedalla, mapTeam, sortByName } from './data.js';
import data from './data/athletes/athletes.js';


 
// Declarando variables
const athletesData = data.athletes;
const homeButton = document.getElementById("home-button");
const champsButton = document.getElementById("champs-button"); 
/* const statsButton = document.getElementById("stats-button"); */

const medalsTeam =  mapTeam(athletesData);
const unitedTeam = [];
medalsTeam.map(team => {
    if (unitedTeam.includes(team) === false){
        unitedTeam.push(team);
    }
    
})

unitedTeam.forEach((team) => {
    const container = document.createElement('tr'); 
    let medallasOro = filterMedalla(athletesData, team,"Gold")
    let medallasSilver = filterMedalla(athletesData,team,"Silver")
    let medallasBronze = filterMedalla(athletesData,team,"Bronze")
    const table = document.getElementById("bodytable");
    table.appendChild(container).innerHTML =
     `<tr> 
      <td> <strong>${team}</strong> 
      </td><td>${medallasOro}</td>
      </td><td>${medallasSilver}</td>
      </td><td>${medallasBronze}</td>
      </tr>` 
      
}) 
 
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

