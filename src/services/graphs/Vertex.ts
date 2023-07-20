export default class Vertex<T> {
  adjacent: Set<Vertex<T>>;
  data: T;

  constructor(data: T) {
    this.adjacent = new Set();
    this.data = data;
  }

  addAdjacent(vertex: Vertex<T>) {
    this.adjacent.add(vertex);
  }
}
