// Filter
export const filterTeam = (data, condition) => {
  return data.filter(athletes => athletes.team.includes(condition));
};

export const filterName = (data, condition) => {
  return data.filter(athletes => athletes.name.includes(condition));
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
export const sortByName = (data) => {
  return data.sort((a,b) => (a.name > b.name ? 1 : -1));
};


//Map
export const mapTeam = (data) => {
  return data.map(athletes => athletes.team);
};

export const mapSport = (data) => {
  return data.map(athletes => athletes.sport);
};




/*export const sortByName = (data, sortData) => {
  const sortResult = data.sort((a,b) => (a.name > b.name ? 1 : -1));
  if (sortData == "A-Z") {
    return sortResult;
  } else {
    return sortResult.reverse();
  }
};*/


