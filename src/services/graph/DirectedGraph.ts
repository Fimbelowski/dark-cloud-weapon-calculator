import Graph from './Graph';
import type Nameable from './Nameable';

export default class DirectedGraph<T extends Nameable> extends Graph<T> {
  constructor() {
    super();
  }

  addEdge(fromVertexName: string, toVertex: T) {
    this.adjacencyList.set(fromVertexName, toVertex);
  }
}
