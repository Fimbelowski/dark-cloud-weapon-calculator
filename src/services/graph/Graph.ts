import type Nameable from './Nameable';

export default class Graph<T extends Nameable> {
  adjacencyList: Map<string, T>;
  vertices: Set<T>;

  constructor() {
    this.adjacencyList = new Map();
    this.vertices = new Set();
  }

  addVertex(vertex: T) {
    this.vertices.add(vertex);
  }
}
