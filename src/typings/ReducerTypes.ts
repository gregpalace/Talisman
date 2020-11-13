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
