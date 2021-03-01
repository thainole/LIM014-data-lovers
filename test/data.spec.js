import {sortByName, sortByTotal, filterByName, filterMale, filterFemale, filterMedal, mapByKey, filterByKey} from '../src/data.js';


describe('Sort by name asc', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('returns sorted data', () => {
    const data = [
    {
      name: 'Claudia',
    },
    {
      name: 'Zoe',
    },
    {
      name: 'Taylor',
    }];

    const result = [
    {
      name: 'Claudia',
    },
    {
      name: 'Taylor',
    },
    {
      name: 'Zoe',
    }];
    expect(sortByName(data, 'a-z')).toEqual(result);
  });
});





describe('Sort by name desc', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('returns sorted reversed data', () => {
    const data = [
    {
      name: 'Claudia',
    },
    {
      name: 'Zoe',
    },
    {
      name: 'Taylor',
    }];

    const result = [
    {
      name: 'Zoe',
    },
    {
      name: 'Taylor',
    },
    {
      name: 'Claudia',
    }];
    expect(sortByName(data, 'z-a')).toEqual(result);
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

    const result = [{
      total: 1,
    },
    {
      total: 4,
    },
    {
      total: 9,
    }];
    expect(sortByTotal(data, 'asc')).toEqual(result);
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

    const result = [{
      total: 9,
    },
    {
      total: 4,
    },
    {
      total: 1,
    }];
    expect(sortByTotal(data, 'dsc')).toEqual(result);
  });
});





describe('Filter by team', () => {
  it('is a function', () => {
    expect(typeof filterByKey).toBe('function');
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
    const result = [{
      name: 'Cristina',
      team: 'Colombia'
    }];
    expect(filterByKey(data, 'Colombia', 'team')).toEqual(result);
  });
});





describe('Filter by sport', () => {
  it('is a function', () => {
    expect(typeof filterByKey).toBe('function');
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
    const result = [{
      name: 'Cristina',
      sport: 'Taekwondo'
    }];
    expect(filterByKey(data, 'Taekwondo', 'sport')).toEqual(result);
  });
});





describe('Filter by event', () => {
  it('is a function', () => {
    expect(typeof filterByKey).toBe('function');
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
    const result = [{
      name: 'Gabriel',
      event: "Water Polo Men's Water Polo"
    }];
    expect(filterByKey(data, "Water Polo Men's Water Polo", 'event')).toEqual(result);
  });
});





describe('Filter by name', () => {
  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('returns filtered data by name', () => {
    const data = [{
      name: 'steven gardiner'
    },
    {
      name: 'artemi gavezou castro'
    }];
    const result = [{
      name: 'artemi gavezou castro'
    }];
    expect(filterByName(data, 'artemi gavezou castro')).toEqual(result);
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
    const result = [{
      name: 'Gabriel',
      gender: 'M'
    }];
    expect(filterMale(data, 'M')).toEqual(result);
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
    const result = [{
      name: 'Cristina',
      gender: 'F'
    }];
    expect(filterFemale(data, 'F')).toEqual(result);
  });
});





describe('Make a new array of every sport', () => {
  it('is a function', () => {
    expect(typeof mapByKey).toBe('function');
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
    const result = ['Rowing', 'Taekwondo'];
    expect(mapByKey(data, 'sport')).toEqual(result);
  });
});





describe('Make a new array of every team', () => {
  it('is a function', () => {
    expect(typeof mapByKey).toBe('function');
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
    const result = ['Brasil', 'Colombia'];
    expect(mapByKey(data, 'team')).toEqual(result);
  });
});





describe('Make a new array of every event', () => {
  it('is a function', () => {
    expect(typeof mapByKey).toBe('function');
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
    const result = ["Taekwondo Women's Heavyweight", "Water Polo Men's Water Polo"];
    expect(mapByKey(data, 'event')).toEqual(result);
  });
});





describe('Gets the total of medals of the country selected', () => {
  it('is a function', () => {
    expect(typeof filterMedal).toBe('function');
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
    const result = 1;
    expect(filterMedal(data, 'Brasil', 'Gold')).toEqual(result);
  });
});