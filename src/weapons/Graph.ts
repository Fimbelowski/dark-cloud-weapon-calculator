type AdjacencyList = {
  [index: string]: string[];
};

export default abstract class Graph {
  adjacencyList: AdjacencyList;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName: string) {
    this.adjacencyList[vertexName] = [];
  }
}
