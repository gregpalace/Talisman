const calculateDamage = (damage: number, defence: number) => {
  // Handle edgecase
  if (damage <= 0) return 0;
  if (defence < 0) defence = 0;

  let damageToDeal = (damage * damage) / (damage + defence);
  // round damage number to prevent decimals
  damageToDeal = Math.ceil(damageToDeal);
  return damageToDeal;
};

export default calculateDamage;
