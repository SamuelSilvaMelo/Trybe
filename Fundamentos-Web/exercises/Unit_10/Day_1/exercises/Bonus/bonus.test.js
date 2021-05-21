const searchEmployee = require('./bonus')

describe('Check the function searchEmployee', () => {
  it('Checks if seartEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it(`Checks return Ana to searchEmployee('8579-6', 'firstName')`, () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  it(`Checks return Gates to searchEmployee('8579-6', 'lastName')`, () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  });

  it(`Checks return specialities to searchEmployee('8579-6', 'specialities')`, () => {
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
  });
 
  it(`Checks return Linda to searchEmployee('1256-4', 'firstName')`, () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });

  it(`Checks return Gates to searchEmployee('1256-4', 'lastName')`, () => {
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });

  it(`Checks return specialities to searchEmployee('1256-4', 'specialities')`, () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });

  it('Checks to have a error when doesnt find id', () => {
    expect(() => { searchEmployee('0000-0', 'firstName') }).toThrow();
  });

  it(`Checks to have a error mensage 'ID não identificada' when doesnt find id`, () => {
    expect(() => { searchEmployee('0000-0', 'firstName') }).toThrowError(new Error('ID não identificada'));
  });

  it('Checks to have a error when doesnt find detail', () => {
    expect(() => { searchEmployee('8579-6', 'firstNames') }).toThrow();
  });

  it(`Checks to have a error mensage 'Informação indisponível' when doesnt find detail`, () => {
    expect(() => { searchEmployee('8579-6', 'firstNames') }).toThrowError(new Error('Informação indisponível'));
  });
})