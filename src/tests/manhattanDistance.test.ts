import { manhattanDistance } from "../manhattanDistance";
import Point from "../Point";

describe("manhattanDistance()", () => {
  it("Returns an absolute int", () => {
    const distance = manhattanDistance();
    expect(distance).toBeGreaterThanOrEqual(0);
  });

  it("Gets the Manhattan distance between two Points", () => {
    const pointA = new Point(6, 2);
    const pointB = new Point(2, 6);
    expect(manhattanDistance(pointA, pointB)).toBe(8);
  });
});
