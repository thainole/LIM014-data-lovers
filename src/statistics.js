import {filterMedalla, mapTeam, sortByTotal} from './data.js';
import data from './data/athletes/athletes.js';
//adicionar el sortByTotal

 
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

//El forEach llena el objeto vacío que es object medals y se crean los keywords
let objMedals = []; 
console.log(unitedTeam);
unitedTeam.forEach((team) => { 
    const container = document.createElement('tr'); 
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
                  
    
/*const table = document.getElementById("bodytable");
    table.appendChild(container).innerHTML =
     `<tr> 
      <td> <strong>${team}</strong> 
      </td><td>${medallasOro}</td>
      </td><td>${medallasSilver}</td>
      </td><td>${medallasBronze}</td>
      </td><td>${total}</td>
      </tr>` 
 
      
})  */
})

//El forEach pinta la tabla con los objetos ya creados
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
      
})  ;
 
 
// Fincionalidad de la barra de navegación
homeButton.addEventListener("click", homePage);
function homePage() {
    window.location.assign('./index.html');
}
 
champsButton.addEventListener("click", champsPage);
function champsPage () {
    window.location.assign('./index.html');
}

