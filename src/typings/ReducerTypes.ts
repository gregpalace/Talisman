export interface IPlayerState {
  readonly hp: number;
  readonly mp: number;
  readonly position: number[];
  readonly spritePosition: string;
  readonly direction: string;
  readonly walkIndex: number;
  readonly inventorySlots: number;
}
