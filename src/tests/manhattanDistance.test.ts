import { manhattanDistance } from "../manhattanDistance";

describe("manhattanDistance()", () => {
  it("Returns an absolute int", () => {
    const distance = manhattanDistance();
    expect(distance).toBeGreaterThanOrEqual(0);
  });
});
