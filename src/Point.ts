/**
 * SPEC:
 * - The class Point is immutable (its state cannot be changed after instantiation)
 * - The class Point has no Getters
 * - The class Point has no public properties (i.e. the internal state cannot be read from outside the class).
 * - The class Point exists on a grid (X,Y coordinates)
 */

export default class Point {
  private x: Number;
  private y: Number;

  constructor(x: Number, y: Number) {
    this.x = x;
    this.y = y;
  }
}
