// Filter
export const filterTeam = (data, condition) => {
  return data.filter(athletes => athletes.team.includes(condition));
};

export const filterName = (data, condition) => {
  return data.filter(athletes => athletes.name.toLowerCase().includes(condition));
};

export const filterSport = (data, condition) => {
  return data.filter(athletes => athletes.sport.includes(condition));
};

export const filterGender = (data, condition) => {
  return data.filter(athletes => athletes.gender.includes(condition));
}
// data - peru - 
export const filterMedalla = (data, conditionCountry, conditionMedal) => {
  let objCountry = data.filter(athletes => athletes.team.includes(conditionCountry));
  return objCountry.filter(medallas => medallas.medal.includes(conditionMedal)).length;
}
  

//Sort 
//export const sortAz = (data) => {
  //return data.sort((a,b) => (a.name > b.name ? 1 : -1));
// };


//Map
export const mapTeam = (data) => {
  return data.map(athletes => athletes.team);
};

export const mapSport = (data) => {
  return data.map(athletes => athletes.sport);
};




export const sortByAz = (data) => data.sort((a,b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1; 
    } else {
      return 0;
    };
  });

  export const sortByZa = (data) => data.sort((a,b) => {
    if (a.name < b.name) {
      return 1;
    } else if (a.name > b.name) {
      return -1;
    } else {
      return 0;
    }
  });