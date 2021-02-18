
// Filter
/*el key sería team, sport, y event */
export const filterByKey = (data, condition, key) => {
    return data.filter(athletes => athletes[key].includes(condition));
};

export const filterByName = (data, condition) => {
    return data.filter(athletes => athletes.name.toLowerCase().includes(condition));
};

export const filterFemale = (data) => {
    return data.filter(athletes => athletes.gender.includes('F'));
};

export const filterMale = (data) => {
    return data.filter(athletes => athletes.gender.includes('M'));
}; 

export const filterMedalla = (data, conditionCountry, conditionMedal) => {
let objCountry = data.filter(athletes => athletes.team.includes(conditionCountry));
return objCountry.filter(medallas => medallas.medal.includes(conditionMedal)).length;
};




//Sort 
export const sortByName = (data, condition)  => {
    if (condition === 'a-z') {
       return data.sort((a, b) => a.name > b.name);
    } else if (condition === 'z-a') {
       return data.sort((a, b) => b.name > a.name);
    } else {
        return data
    }
}


//Orden de tabla de manera descendente (números, por eso no se usa la funció de arriba)
export const sortByTotal = (data, condition) => {
 if (condition === 'asc') {
    return data.sort((a, b) => a.total - b.total);
  }
  else {
    return data.sort((a, b) => b.total - a.total);
  }
}


//Map
/*Igual que el filter, se usa el key para sport, team y event*/
export const mapByKey = (data, key) => {
    return data
    .map(athletes => athletes[key])
    .sort((a, b) => a > b ? 1 : -1);
}
