import { add, subtract } from "../modules/calc";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract 5 - 2 to equal 3", () => {
  expect(subtract(5, 2)).toBe(3);
});
