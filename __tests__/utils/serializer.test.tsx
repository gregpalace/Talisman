import serializer from '../../src/utils/serialize-items';

describe('item serialization tests', () => {
  it('should generate an ID for game items', () => {
    const ID = serializer();
    expect(ID).toBeTruthy();
    expect(typeof ID).toEqual('string');
  });

  it('subsequent serializations should not match', () => {
    const ID = serializer();
    const ID2 = serializer();
    expect(ID).not.toEqual(ID2);
  });

  it('should generate an ID of the same length', () => {
    const ID = serializer();
    const ID2 = serializer();
    expect(ID.length).toBe(36);
    expect(ID2.length).toBe(36);
  });
});
