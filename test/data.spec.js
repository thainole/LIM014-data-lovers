import {filterTeam, sortByAz} from '../src/data.js';


describe('Sort by Az', () => {
  it('is a function', () => {
    expect(typeof sortByAz).toBe('function');
  });

  it('returns sorted data', () => {
    const data = [{
      name: 'A',
    },
    {
      name: 'Z',
    },
    {
      name: 'D',
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
    expect(sortByAz(data)).toEqual(resultado);
  });
});


describe('Filter by team', () => {
  it('is a function', () => {
    expect(typeof filterTeam).toBe('function');
  });

  it('returns filtered data', () => {
    const data = [{
      name: 'andres',
      team: 'brasil'
    },
    {
      name: 'mai',
      team: 'colombia'
    }];
    const condition = 'colombia'
    const resultado = [{
      name: 'mai',
      team: 'colombia'
    }];
    expect(filterTeam(data, condition)).toEqual(resultado);
  });
});
