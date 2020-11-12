import HuntersCap from './armor/hunters-cap';
import LeatherArmor from './armor/leather-armor';
import LeatherBoots from './armor/leather-boots';
import LeatherGloves from './armor/leather-gloves';
import HpPotion from './potions/potions';
import RustySword from './weapons/rusty-sword';

const Items = {
  weapons: {
    RustySword,
  },
  armor: {
    HuntersCap,
    LeatherArmor,
    LeatherGloves,
    LeatherBoots,
  },
  other: {
    HpPotion,
  },
};

export const randomItemsT1 = [
  RustySword,
  LeatherArmor,
  LeatherBoots,
  HuntersCap,
  LeatherGloves,
];

export default Items;
