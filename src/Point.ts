/**
 * SPEC:
 * - The class Point is immutable (its state cannot be changed after instantiation)
 * - The class Point has no Getters
 * - The class Point has no public properties (i.e. the internal state cannot be read from outside the class).
 * - The class Point exists on a grid (X,Y coordinates)
 */

export default class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public distanceTo(point: Point): number {
    // Manhattan distance: absolute value of (x1 - x2) + (y1 - y2)
    return Math.abs(this.x - point.x + this.y - point.y);
  }
}
