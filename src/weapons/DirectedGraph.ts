import Graph from './Graph';

export default abstract class DirectedGraph extends Graph {
  constructor() {
    super();
  }

  addEdge(fromVertex: string, toVertex: string) {
    this.adjacencyList[fromVertex].push(toVertex);
  }
}
