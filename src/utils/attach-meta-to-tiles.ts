import _cloneDeep from 'lodash.clonedeep';

export default function attachMetaToTiles(tiles: any) {
  const newTiles = _cloneDeep(tiles);

  newTiles.forEach((_: any, tileRowIndex: number) => {
    newTiles[tileRowIndex].forEach((_: any, tileIndex: number) => {
      newTiles[tileRowIndex][tileIndex] = {
        // give each tile a 'value'
        value: newTiles[tileRowIndex][tileIndex],
        // this is used for showing visited tiles
        explored: 0,
        // add a variation for tiles that allow for it (random num: 1 - 4)
        variation: Math.round(Math.random() * (4 - 1) + 1),
      };
    });
  });

  return newTiles;
}
