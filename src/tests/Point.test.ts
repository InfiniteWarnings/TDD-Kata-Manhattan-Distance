import Point from "../Point";

describe("Point", () => {
  it("is an instance of Point", () => {
    const point = new Point(0, 0);
    expect(point).toBeInstanceOf(Point);
  });

  it("Should calculate horizontal distance", () => {
    const pointA = new Point(3, 0);
    const pointB = new Point(9, 0);
    expect(pointA.distanceTo(pointB)).toBe(6);
  });
});
