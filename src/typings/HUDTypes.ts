export interface IFiller {
  percentage: number | null;
  hp: number;
}

export interface IHealth {
  percentage: number | null;
  hp: number;
}

export interface IInventory {
  hp: number;
  mp: number;
  inventorySlots: number;
}
