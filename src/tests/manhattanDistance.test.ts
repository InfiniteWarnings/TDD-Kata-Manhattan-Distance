import { manhattanDistance } from "../manhattanDistance";
import Point from "../Point";

describe("manhattanDistance()", () => {
  it("Gets the Manhattan distance between two Points", () => {
    const pointA = new Point(6, 2);
    const pointB = new Point(2, 6);
    expect(manhattanDistance(pointA, pointB)).toBe(8);
  });

  it("Returns positive with positive values", () => {
    const pointA = new Point(1, 1);
    const pointB = new Point(1, 1);
    expect(manhattanDistance(pointA, pointB)).toBeGreaterThanOrEqual(0);
  });

  it("Returns positive with negative values", () => {
    const pointA = new Point(-1, -1);
    const pointB = new Point(-1, -1);
    expect(manhattanDistance(pointA, pointB)).toBeGreaterThanOrEqual(0);
  });
});
