import {sortByAz} from '../src/data.js';


describe('Sort by Az', () => {
  it('is a function', () => {
    expect(typeof sortByAz).toBe('function');
  });

  it('returns `example`', () => {
    expect(sortByAz()).toBe('example');
  });
});

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
