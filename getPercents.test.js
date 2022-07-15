import { getPercents } from "./getPercents";

describe('tests', () => {
  it("result should be right", () => {
    const result = getPercents(4, 20)
    expect(result).toBe(0.8);
  }); 
  it("result should be returned", () => {
    expect(getPercents()).toBeDefined();
  });
  it("resuld should be NAN if args are strings", () => {
    const result1 = getPercents("fsaf", 'fsfsa')
    expect(result1).toBeNaN();
  });
});