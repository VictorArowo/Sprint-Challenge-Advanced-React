import getCode from '../GetCode';

describe('country code', () => {
  it('returns correct country code', () => {
    expect(getCode('Nigeria')).toBe('ng');
  });
});
