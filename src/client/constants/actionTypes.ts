// Player Stats
export const MAX_HP = 100;
export const MAX_MP = 150;
export const MAX_ITEMS = 6;
export const SPRITE_SIZE = 50;
export const INVENTORY_SLOTS = 6;

// Store Actions
export const MONSTER_DIED = 'MONSTER_DIED';
export const PLAYER_DIED = 'PLAYER_DIED';
export const MONSTER_ATTACKED = 'MONSTER_ATTACKED';
export const PLAYER_ATTACKED = 'PLAYER_ATTACKED';
export const MOVE_PLAYER = 'MOVE_PLAYER';
export const RESET = 'RESET';
export const ADD_TILES = 'ADD_TILES';

// Stats Store Actions
export const GET_COINS = 'GET_COINS';
export const LOSE_COINS = 'LOSE_COINS';
export const UNEQUIP_ITEM = 'UNEQUIP_ITEM';
export const EQUIP_ITEM = 'EQUIP_ITEM';
export const TAKE_DAMAGE = 'TAKE_DAMAGE';
export const HEAL = 'HEAL';
export const GET_EXP = 'GET_EXP';

// Inventory Store Actions
export const DROP_ITEM = 'DROP_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const UPGRADE_BACKPACK = 'UPGRADE_BACKPACK';

// Monster Store Actions
export const MOVE_MONSTER = 'MOVE_MONSTER';
export const DAMAGE_TO_MONSTER = 'DAMAGE_TO_MONSTER';
export const GENERATE_MONSTERS = 'GENERATE_MONSTERS';
export const SHOW_MONSTER = 'SHOW_MONSTER';
export const HIDE_MONSTER = 'HIDE_MONSTER';

// Map Dimensions
export const MAP_WIDTH = SPRITE_SIZE * 10;
export const MAP_HEIGHT = SPRITE_SIZE * 20;

// Game Viewport
export const GAME_VIEWPORT_SIZE = 350;
export const GAME_VIEWPORT_SIZE_LG = 400;

// Misc.
export const VERSION = 1.0;
export const FLAME_SIZE = 40;
