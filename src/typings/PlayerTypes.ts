import { IStatsState } from './ReducerTypes';

export interface IState {
  readonly map: IMapState;
  readonly player: IPlayerState;
  readonly stats: IStatsState;
}

export interface IMapState {
  readonly tiles: number[];
}
export interface IPlayerState {
  readonly hp: number;
  readonly mp: number;
  readonly inventorySlots: number;
  readonly position: number[];
  readonly playerMoved: boolean;
  readonly playerAttacked: boolean;
  readonly monsterAttacked: boolean;
  readonly playerDied: boolean;
  readonly monsterDied: boolean;
  readonly direction: string;
  readonly spritePosition: string;
  readonly walkIndex: number;
}
