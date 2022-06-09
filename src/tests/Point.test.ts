import Point from "../Point";

describe("Point", () => {
  it("is an instance of Point", () => {
    const point = new Point();
    expect(point).toBeInstanceOf(Point);
  });
});
