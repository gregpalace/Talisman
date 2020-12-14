import calculateDamage from '../../src/utils/calculateDamage';

describe('Damage calculation tests', () => {
  it('should return 0 when given falsy values', () => {
    const damage = calculateDamage(0, 0);
    expect(damage).toEqual(0);
    expect(damage).toBeFalsy();
  });
});
