import Point from "../Point";

describe("Point", () => {
  it("is an instance of Point", () => {
    const point = new Point(0, 0);
    expect(point).toBeInstanceOf(Point);
  });

  const horizontalCases = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [3, 9, 6],
    [9, 3, 6],
    [8, 12, 4],
  ];

  test.each(horizontalCases)(
    "Should calculate horizontal distance",
    (pointAX, pointBX, expected) => {
      const pointA = new Point(pointAX, 0);
      const pointB = new Point(pointBX, 0);
      expect(pointA.distanceTo(pointB)).toBe(expected);
    }
  );

  it("Should calculate vertical distance", () => {
    const pointA = new Point(0, 3);
    const pointB = new Point(0, 9);
    expect(pointA.distanceTo(pointB)).toBe(6);
  });

  it("Should calculate Manhattan distance", () => {
    const pointA = new Point(3, 3);
    const pointB = new Point(9, 9);
    expect(pointA.distanceTo(pointB)).toBe(12);
  });
});
