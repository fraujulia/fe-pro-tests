import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  describe('when lowercase is used', () => {
    it('changes string to lower case', () => {
      const result = changeStringCase('MY NAME is yulia', 'lowercase');

      expect(result).toEqual('my name is yulia');
    });
  });

  describe('when uppercase is used', () => {
    it('changes string to upper case', () => {
      const result = changeStringCase('my name is yulia', 'uppercase');

      expect(result).toEqual('MY NAME IS YULIA');
    });
  });
});

describe('sumOfArray()', () => {
  describe ('numbers are used', () =>{
  it('returns the sum', () => {
    const result = sumOfArray([0, 1, 2, 3, 4]);

    expect(result).toEqual(10);
  }, 0);
});
  describe ('empty array', () =>{
    it('returns zero', () => {
      const result = sumOfArray([]);

      expect(result).toEqual(0);
    }, 0);
  });
});


describe('divisibleBy()', () => {
    it('filters the array', () => {
      const result = divisibleBy([1, 2, 3, 4, 5], 2);

      expect(result).toEqual([2, 4]);
    });
  });


describe('addDotsToString()', () => {
  it('adds dots in the end of the string', () => {
    const result = addDotsToString('cats', 2);

    expect(result).toEqual('cat...');
  });
});

describe('objectEntries()', () => {
  it('adds key and value to the object', () => {
    const result = objectEntries({firstName: 'Name', age: 12});

    expect(result).toEqual([['firstName','Name'], ['age', 12]]);
  });
});