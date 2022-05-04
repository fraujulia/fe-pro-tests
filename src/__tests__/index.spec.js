import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  describe('when lowercase is used', () => {
    it('returns string with lower case', () => {
      const result = changeStringCase('MY NAME is yulia', 'lowercase');

      expect(result).toEqual('my name is yulia');
    });
  });
  describe('when uppercase is used', () => {
    it('returns string with upper case', () => {
      const result = changeStringCase('my name is yulia', 'uppercase');

      expect(result).toEqual('MY NAME IS YULIA');
    });
  });
});

describe('sumOfArray()', () => {
  describe('numbers are used', () => {
    it('returns the sum', () => {
      const result = sumOfArray([0, 1, 2, 3, 4]);

      expect(result).toEqual(10);
    }, 0);
  });
  describe('not a number', () => {
    it('returns zero', () => {
      const result = sumOfArray(['test', 'test', 'test']);

      expect(result).toEqual(0);
    }, 0);
  });
  describe('empty array', () => {
    it('returns zero', () => {
      const result = sumOfArray([]);

      expect(result).toEqual(0);
    }, 0);
  });
});

describe('divisibleBy()', () => {
  describe('numbers are used', () => {
    it('returns filtered array', () => {
      const result = divisibleBy([1, 2, 3, 4, 5], 2);

      expect(result).toEqual([2, 4]);
    });
  });
  describe('strings are used', () => {
    it('returns empty array', () => {
      const result = divisibleBy(['test', 'test']);

      expect(result).toEqual([]);
    });
  });
  describe('number is string', () => {
    it('returns empty array', () => {
      const result = divisibleBy([1, 2, 3, 4, 5], 'test');

      expect(result).toEqual([]);
    });
  });
});

describe('addDotsToString()', () => {
  describe('string is longer than the second arg', () => {
    it('returns correct string', () => {
      const result = addDotsToString('Hello all', 5);

      expect(result).toEqual('He...');
    });
  });
  describe('string is shorter than the second arg', () => {
    it('returns correct string', () => {
      const result = addDotsToString('Hello all', 50);

      expect(result).toEqual('Hello all');
    });
  });
  describe('no second arg', () => {
    it('returns original string', () => {
      const result = addDotsToString('Hello all');

      expect(result).toEqual('Hello all');
    });
  });
});

describe('objectEntries()', () => {
  describe('obj has values', () => {
    it('returnns key and value in the object', () => {
      const result = objectEntries({ firstName: 'Name', age: 12 });

      expect(result).toEqual([
        ['firstName', 'Name'],
        ['age', 12],
      ]);
    });
  });
  describe('obj is empty', () => {
    it('returnns empty obj', () => {
      const result = objectEntries({});

      expect(result).toEqual([]);
    });
  });
});
