//métodos 
export const filterTeam = (data, condition) => {
  return data.filter(athletes => athletes.team.includes(condition));
  //   return data.filter(athletes => athletes.team == condition);

};

export const filterSport = (data, condition) => {
  return data.filter(athletes => athletes.sport.includes(condition));
};

export const mapTeams = (data) => {
  return data.map(athletes => athletes.team);
};
