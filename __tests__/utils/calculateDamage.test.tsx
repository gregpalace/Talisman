import calculateDamage from '../../src/utils/calculateDamage';

describe('Damage calculation tests', () => {
  it('should return 0 when given falsy values', () => {
    const damage = calculateDamage(0, 0);
    expect(damage).toEqual(0);
    expect(damage).toBeFalsy();
  });

  it('should return positive number if defence value is negative', () => {
    const damage = calculateDamage(10, -5);
    expect(damage).toBeGreaterThan(0);
    expect(damage).toBeTruthy();
  });

  it('should calculate a non decimal value', () => {
    const damage = calculateDamage(15, 4);
    const damage1 = calculateDamage(12, 5.6);
    expect(damage).toEqual(12);
    expect(damage1).toEqual(9);
  });
});
