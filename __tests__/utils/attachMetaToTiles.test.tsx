import attachMetaToTiles from '../../src/utils/attach-meta-to-tiles';

import map1 from '../../src/data/maps/map1';
import map2 from '../../src/data/maps/map2';

type testType = {
  value: number;
  explored: number;
  variation: number;
};

type outputObj = {
  [key: string]: testType;
};

describe('Tests for metadata of tiles', () => {
  let result: any[];
  beforeEach(() => {
    result = attachMetaToTiles(map1);
  });

  it('should return the map passed into the function', () => {
    expect(map1.length).toEqual(attachMetaToTiles(map1).length);
  });

  it('should map over each tile and provide data for each visited tile', () => {
    result.forEach((tile: outputObj[], index: number) => {
      if (index === 0) {
        expect(tile[0]).toHaveProperty('value');
        expect(tile[0]).toHaveProperty('explored');
        expect(tile[0]).toHaveProperty('variation');
      } else if (index === 1) {
        expect(tile[0]).toHaveProperty('value');
        expect(tile[0]).toHaveProperty('explored');
        expect(tile[0]).toHaveProperty('variation');
      } else if (index === 2) {
        expect(tile[0]).toHaveProperty('value');
        expect(tile[0]).toHaveProperty('explored');
        expect(tile[0]).toHaveProperty('variation');
      }
    });
  });

  it('should produce a "variation" property with a dynamic value', () => {
    result.forEach((tile: any[], index: number) => {
      if (index === 0) {
        expect(tile[0].variation).toBeLessThanOrEqual(4);
        expect(tile[1].variation).toBeLessThanOrEqual(4);
        expect(tile[2].variation).toBeLessThanOrEqual(4);
        expect(tile[3].variation).toBeLessThanOrEqual(4);
      }
    });
  });

  it('should map the current tiles value', () => {
    const newResult = attachMetaToTiles(map2);
    newResult.forEach((tile: any[], index: number) => {
      if (index === 0) {
        expect(tile[0]).toHaveProperty('value');
        expect(tile[0].value).toEqual(1);
      }
      if (index === 3) {
        expect(tile[0]).toHaveProperty('value');
        expect(tile[0].value).toEqual(0);
      }
    });
  });
});
