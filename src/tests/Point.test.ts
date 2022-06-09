import Point from "../Point";

describe("Point", () => {
  it("is an instance of Point", () => {
    const point = new Point(0, 0);
    expect(point).toBeInstanceOf(Point);
  });

  const singleCoordinateCases = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [3, 9, 6],
    [9, 3, 6],
    [8, 12, 4],
    [-12, 10, 22],
  ];

  //x1,x1,expected
  test.each(singleCoordinateCases)(
    "Should calculate horizontal distance",
    (pointAX, pointBX, expected) => {
      const pointA = new Point(pointAX, 0);
      const pointB = new Point(pointBX, 0);
      expect(pointA.distanceTo(pointB)).toBe(expected);
    }
  );

  //y1,y1,expected
  test.each(singleCoordinateCases)(
    "Should calculate vertical distance",
    (pointAY, pointBY, expected) => {
      const pointA = new Point(0, pointAY);
      const pointB = new Point(0, pointBY);
      expect(pointA.distanceTo(pointB)).toBe(expected);
    }
  );

  //[x1,y1],[x2,y2],expected
  const XYCoordinateCases = [
    [[0, 0], [0, 0], 0],
    [[3, 3], [9, 9], 12],
    [[0, 3], [0, 9], 6],
    [[3, 3], [3, 3], 0],
    [[13, 3], [3, 20], 27],
    [[6, 2], [2, 6], 8],
    [[-12, -8], [12, 6], 38],
    [[0, 0], [-3, 5], 8],
  ];

  test.each(XYCoordinateCases)(
    "Should calculate Manhattan distance",
    (coordinatesA, coordinatesB, expected) => {
      const pointA = new Point(coordinatesA[0], coordinatesA[1]);
      const pointB = new Point(coordinatesB[0], coordinatesB[1]);
      expect(pointA.distanceTo(pointB)).toBe(expected);
    }
  );
});
