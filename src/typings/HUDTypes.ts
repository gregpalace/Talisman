export interface IFiller {
  percentage?: number | null;
  hp: number;
}

export interface IHealth {
  percentage: number | null;
  hp: number;
}

export interface IMpFiller {
  percentage: number | null;
  mp: number;
}

export interface IMagic {
  mp: number;
}

export interface IInventory {
  hp: number;
  mp: number;
  inventorySlots: number;
}
