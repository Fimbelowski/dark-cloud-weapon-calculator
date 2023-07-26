import Vertex from './Vertex';

export default abstract class AcyclicDirectedGraph<T> {
  vertices: Map<T, Vertex<T>>;

  constructor() {
    this.vertices = new Map();
  }

  protected addEdge(source: T, destination: T) {
    const sourceVertex = this.addVertex(source);
    const destinationVertex = this.addVertex(destination);

    sourceVertex.addAdjacent(destinationVertex);

    if (this.#cycleExists()) {
      throw Error('Cycle detected.');
    }
  }

  protected addVertex(data: T) {
    let vertex = this.vertices.get(data);

    if (vertex !== undefined) {
      return vertex;
    }

    vertex = new Vertex(data);
    this.vertices.set(data, new Vertex(data));

    return vertex;
  }

  #cycleExists() {
    const visited = new Set<Vertex<T>>();
    const stack: Array<Vertex<T>> = [];

    function dfs(
      current: Vertex<T>,
      visited: Set<Vertex<T>>,
      stack: Array<Vertex<T>>
    ) {
      if (stack.includes(current)) {
        return true;
      }

      if (visited.has(current)) {
        return false;
      }

      visited.add(current);
      stack.push(current);

      for (const adjacent of current.adjacent) {
        if (dfs(adjacent, visited, stack)) {
          return true;
        }
      }

      stack.pop();

      return false;
    }

    for (const vertex of this.vertices.values()) {
      if (dfs(vertex, visited, stack)) {
        return true;
      }
    }

    return false;
  }

  protected getVertexLongestDistanceFromLeaf(data: T): number {
    const dataVertex = this.vertices.get(data);

    if (dataVertex === undefined) {
      throw Error('Vertex not found.');
    }

    const { adjacent } = dataVertex;

    if (adjacent.size === 0) {
      return 0;
    }

    return Math.max(
      ...Array.from(adjacent.values()).map(
        ({ data }) => this.getVertexLongestDistanceFromLeaf(data) + 1
      )
    );
  }
}
