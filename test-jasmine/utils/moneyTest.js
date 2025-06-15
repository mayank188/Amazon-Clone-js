
import formatCurrency from "../../scripts/utils/money";

describe('test suite: formatCurrency', () => {
  it('converts cents into dollar', () => {
    expect(formatCurrency(2095)).toBe('20.95');
  });
});
