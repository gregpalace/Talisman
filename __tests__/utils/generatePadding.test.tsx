import generatePadding from '../../src/utils/generate-padding';

import { MAP_PADDING_DISTANCE } from '../../src/client/constants/actionTypes';

describe('Padding generation tests', () => {
  it('should return padding for tile maps', () => {
    const paddingResults = generatePadding();
    expect(paddingResults.top).toBeDefined();
    expect(paddingResults.bottom).toBeDefined();
    expect(paddingResults.left).toBeDefined();
    expect(paddingResults.right).toBeDefined();
  });

  xit('should return a padding object with properties', () => {});

  it('should generate an array of subarrays based on padding distance', () => {
    const paddingResults = generatePadding();
    expect(paddingResults.top.length).toEqual(MAP_PADDING_DISTANCE);
    expect(paddingResults.bottom.length).toEqual(MAP_PADDING_DISTANCE);
    expect(paddingResults.left.length).toEqual(25);
    expect(paddingResults.right.length).toEqual(25);
  });
});
