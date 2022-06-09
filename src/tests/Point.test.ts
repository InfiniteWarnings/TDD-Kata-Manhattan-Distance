import Point from "../Point";

describe("Point", () => {
  it("is an instance of Point", () => {
    const point = new Point(0, 0);
    expect(point).toBeInstanceOf(Point);
  });
});
