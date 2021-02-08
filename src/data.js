// Filter
export const filterTeam = (data, condition) => {
  return data.filter(athletes => athletes.team.includes(condition));
};

export const filterSport = (data, condition) => {
  return data.filter(athletes => athletes.sport.includes(condition));
};


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
}


/*export const sortByName = (data, sortData) => {
  const sortResult = data.sort((a,b) => (a.name > b.name ? 1 : -1));
  if (sortData == "A-Z") {
    return sortResult;
  } else {
    return sortResult.reverse();
  }
};*/


