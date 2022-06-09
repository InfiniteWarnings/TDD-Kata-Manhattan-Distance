import Point from "./Point";

export function manhattanDistance(pointA: Point, pointB: Point): number {
  return pointA.distanceTo(pointB);
}
