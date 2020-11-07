export interface IState {
  readonly map: IMapState;
  readonly player: IPlayerState;
}

export interface IMapState {
  readonly tiles: number[];
}
export interface IPlayerState {
  readonly hp: number;
  readonly mp: number;
  readonly inventorySlots: number;
  readonly position: number[];
  readonly direction: string;
  readonly spritePosition: string;
  readonly walkIndex: number;
}
