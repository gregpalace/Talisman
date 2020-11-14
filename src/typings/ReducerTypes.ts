export interface IPlayerState {
  readonly hp: number;
  readonly mp: number;
  readonly position: number[];
  readonly spritePosition: string;
  readonly direction: string;
  readonly walkIndex: number;
  readonly inventorySlots: number;
}

export interface IMonsterState {
  // MUST FIGURE OUT THE STRUCTURE FOR THIS ---- (TODO)
  config: any;
}

export interface IStatsState {
  hp: number;
  maxHp: number;
  damage: number;
  defence: number;
  level: number;
  exp: number;
  expToNxtLevel: number;
  coins: number;
  equippedItems: any;
  levelUp: ILevelUp;
}

export interface IInventoryState {
  items: any;
  maxItems: number | null;
}

interface IItems {
  name?: string;
  type?: string;
  defence?: number;
  image?: any;
  value?: number;
}

interface ILevelUp {
  level: number;
  hp: number;
  dmg: number;
}

export interface IDialog {
  gameText: boolean;
  gameOver: boolean;
  gameStart: boolean;
  gameInstructions: boolean;
  gameSelect: null;
  gameWin: false;
  paused: boolean;
  chest: boolean;
  chestOpen: boolean;
  shop: boolean;
  settings: boolean;
  inventory: boolean;
  levelUp: boolean;
}
