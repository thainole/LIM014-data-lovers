import {sortByName, sortByTotal, filterTeam, filterSport, filterEvent, filterName, filterMale, filterFemale, filterMedalla, mapSport, mapTeam, mapEvent} from '../src/data.js';


describe('Sort by name asc', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('returns sorted data', () => {
    const data = [{
      name: 'D',
    },
    {
      name: 'Z',
    },
    {
      name: 'A',
    }];

    const resultado = [{
      name: 'A',
    },
    {
      name: 'D',
    },
    {
      name: 'Z',
    }];
    expect(sortByName(data, 'a-z')).toEqual(resultado);
  });
});





describe('Sort by name desc', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('returns sorted reversed data', () => {
    const data = [{
      name: 'D',
    },
    {
      name: 'Z',
    },
    {
      name: 'A',
    }];

    const resultado = [{
      name: 'Z',
    },
    {
      name: 'D',
    },
    {
      name: 'A',
    }];
    expect(sortByName(data, 'z-a')).toEqual(resultado);
  });
});





describe('Sort by total asc', () => {
  it('is a function', () => {
    expect(typeof sortByTotal).toBe('function');
  });

  it('returns sorted data', () => {
    const data = [{
      total: 4,
    },
    {
      total: 9,
    },
    {
      total: 1,
    }];

    const resultado = [{
      total: 1,
    },
    {
      total: 4,
    },
    {
      total: 9,
    }];
    expect(sortByTotal(data, 'asc')).toEqual(resultado);
  });
});





describe('Sort by total dsc', () => {
  it('is a function', () => {
    expect(typeof sortByTotal).toBe('function');
  });

  it('returns sorted data', () => {
    const data = [{
      total: 4,
    },
    {
      total: 9,
    },
    {
      total: 1,
    }];

    const resultado = [{
      total: 9,
    },
    {
      total: 4,
    },
    {
      total: 1,
    }];
    expect(sortByTotal(data, 'dsc')).toEqual(resultado);
  });
});





describe('Filter by team', () => {
  it('is a function', () => {
    expect(typeof filterTeam).toBe('function');
  });

  it('returns filtered data by team', () => {
    const data = [{
      name: 'Gabriel',
      team: 'Brasil'
    },
    {
      name: 'Cristina',
      team: 'Colombia'
    }];
    const resultado = [{
      name: 'Cristina',
      team: 'Colombia'
    }];
    expect(filterTeam(data, 'Colombia')).toEqual(resultado);
  });
});





describe('Filter by sport', () => {
  it('is a function', () => {
    expect(typeof filterSport).toBe('function');
  });

  it('returns filtered data by sport', () => {
    const data = [{
      name: 'Gabriel',
      sport: 'Rowing'
    },
    {
      name: 'Cristina',
      sport: 'Taekwondo'
    }];
    const resultado = [{
      name: 'Cristina',
      sport: 'Taekwondo'
    }];
    expect(filterSport(data, 'Taekwondo')).toEqual(resultado);
  });
});





describe('Filter by event', () => {
  it('is a function', () => {
    expect(typeof filterEvent).toBe('function');
  });

  it('returns filtered data by event', () => {
    const data = [{
      name: 'Gabriel',
      event: "Water Polo Men's Water Polo"
    },
    {
      name: 'Cristina',
      event: "Taekwondo Women's Heavyweight"
    }];
    const resultado = [{
      name: 'Gabriel',
      event: "Water Polo Men's Water Polo"
    }];
    expect(filterEvent(data, "Water Polo Men's Water Polo")).toEqual(resultado);
  });
});





describe('Filter by name', () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });

  it('returns filtered data by name', () => {
    const data = [{
      name: 'steven gardiner'
    },
    {
      name: 'artemi gavezou castro'
    }];
    const resultado = [{
      name: 'artemi gavezou castro'
    }];
    expect(filterName(data, 'artemi gavezou castro')).toEqual(resultado);
  });
});





describe('Filter by male gender', () => {
  it('is a function', () => {
    expect(typeof filterMale).toBe('function');
  });

  it('returns filtered data by male gender', () => {
    const data = [{
      name: 'Gabriel',
      gender: 'M'
    },
    {
      name: 'Cristina',
      gender: 'F'
    }];
    const resultado = [{
      name: 'Gabriel',
      gender: 'M'
    }];
    expect(filterMale(data, 'M')).toEqual(resultado);
  });
});





describe('Filter by female gender', () => {
  it('is a function', () => {
    expect(typeof filterFemale).toBe('function');
  });

  it('returns filtered data by female gender', () => {
    const data = [{
      name: 'Gabriel',
      gender: 'M'
    },
    {
      name: 'Cristina',
      gender: 'F'
    }];
    const resultado = [{
      name: 'Cristina',
      gender: 'F'
    }];
    expect(filterFemale(data, 'F')).toEqual(resultado);
  });
});





describe('Make a new array of every sport', () => {
  it('is a function', () => {
    expect(typeof mapSport).toBe('function');
  });

  it('returns an array of every sport', () => {
    const data = [{
      name: 'Gabriel',
      sport: 'Rowing'
    },
    {
      name: 'Cristina',
      sport: 'Taekwondo'
    }];
    const resultado = ['Rowing', 'Taekwondo'];
    expect(mapSport(data)).toEqual(resultado);
  });
});





describe('Make a new array of every team', () => {
  it('is a function', () => {
    expect(typeof mapTeam).toBe('function');
  });

  it('returns an array of every team', () => {
    const data = [{
      name: 'Gabriel',
      team: 'Brasil'
    },
    {
      name: 'Cristina',
      team: 'Colombia'
    }];
    const resultado = ['Brasil', 'Colombia'];
    expect(mapTeam(data)).toEqual(resultado);
  });
});





describe('Make a new array of every event', () => {
  it('is a function', () => {
    expect(typeof mapEvent).toBe('function');
  });

  it('returns an array of every event', () => {
    const data = [{
      name: 'Gabriel',
      event: "Water Polo Men's Water Polo"
    },
    {
      name: 'Cristina',
      event: "Taekwondo Women's Heavyweight"
    }];
    const resultado = ["Water Polo Men's Water Polo", "Taekwondo Women's Heavyweight"];
    expect(mapEvent(data)).toEqual(resultado);
  });
});





describe('Gets the total of medals of the country selected', () => {
  it('is a function', () => {
    expect(typeof filterMedalla).toBe('function');
  });

  it('returns a number of medals', () => {
    const data = [{
      name: 'Gabriel',
      team: 'Brasil',
      medal: 'Gold',
    },
    {
      name: 'Cristina',
      team: 'Brasil',
      medal: 'Bronze'
    },
    {
      name: 'Angel',
      team: 'France',
      medal: 'Silver'
    }];
    const resultado = 1;
    expect(filterMedalla(data, 'Brasil', 'Gold')).toEqual(resultado);
  });
});