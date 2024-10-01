const path = require('path');

const students = ['std1', 'std2', 'std3'];

students.forEach(student => {
  describe(`Testing ${student}.js`, () => {
    let add;

    beforeAll(() => {
      const studentModule = require(path.join(__dirname, `../students/${student}`));
      add = studentModule.add;
    });

    test('should correctly add two positive numbers', () => {
      expect(add(1, 2)).toBe(3);
    });

    test('should correctly add negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });

  });
});
