import arrayAverage from 'src/app/utilities/arrayAverage';
import countInversions from 'src/app/utilities/countInversions';
import heapsAlgorithm from 'src/app/utilities/heapsAlgorithm';
import shuffleArray from 'src/app/utilities/shuffleArray';
import type WeaponGraph from '../graphs/WeaponGraph';
import type { IWeaponMatrix, WeaponMatrixRow } from './IWeaponMatrix';
import type WeaponType from './WeaponType';

type SweepDirection = 'down' | 'up';

export default class WeaponMatrix<T extends WeaponType> {
  public readonly matrix: IWeaponMatrix<T> = [];

  constructor(private readonly weaponGraph: WeaponGraph<T>) {
    this.weaponGraph.vertices.forEach((vertex, weapon) => {
      const depth = this.weaponGraph.getWeaponLongestDistanceFromLeaf(weapon);

      if (this.matrix[depth] === undefined) {
        this.matrix[depth] = [];
      }

      this.matrix[depth].push(weapon);
    });

    this.matrix.reverse();

    let sweep = 1;
    let forgiveness = 10;
    let lowestGlobalIntersections = this.getTotalNumberOfIntersections();

    while (forgiveness > 0) {
      const tempMatrix = this.matrix.map((row) => row.slice());

      const sweepDirection: SweepDirection = sweep % 2 === 0 ? 'down' : 'up';
      const delta = sweepDirection === 'down' ? 1 : -1;

      let totalSweepIntersections = 0;

      for (
        let i = sweepDirection === 'down' ? 0 : tempMatrix.length - 1;
        sweepDirection === 'down' ? i < tempMatrix.length - 1 : i > 0;
        i += delta
      ) {
        const fixedRow = tempMatrix[i];
        let mutableRow = tempMatrix[i + delta];

        const heuristicFunction =
          mutableRow.length <= 6
            ? this.optimizeIntersectionsByPermutation.bind(this)
            : this.optimizeIntersectionsByBarycenter.bind(this);

        mutableRow = heuristicFunction(fixedRow, mutableRow, sweepDirection);
        tempMatrix[i + delta] = mutableRow;

        totalSweepIntersections += this.getIntersectionsBetweenRows(
          sweepDirection === 'down' ? fixedRow : mutableRow,
          sweepDirection === 'down' ? mutableRow : fixedRow
        );
      }

      if (totalSweepIntersections < lowestGlobalIntersections) {
        lowestGlobalIntersections = totalSweepIntersections;
        this.matrix = tempMatrix;
      } else {
        forgiveness--;
      }

      sweep += 2;
    }
  }

  private getIntersectionsBetweenRows(
    upperRow: WeaponMatrixRow<T>,
    lowerRow: WeaponMatrixRow<T>
  ) {
    const edges: Array<[number, number]> = [];

    upperRow.forEach(({ buildsUpInto }, sourceIndex) => {
      buildsUpInto.forEach((buildUpWeapon) => {
        const buildUpWeaponIndex = lowerRow.findIndex((lowerRowWeapon) =>
          lowerRowWeapon.is(buildUpWeapon)
        );

        edges.push([sourceIndex, buildUpWeaponIndex]);
      });
    });

    edges.sort(([a1, a2], [b1, b2]) => (a1 === b1 ? a2 - b2 : a1 - b1));

    const bCoordinates = edges.map(([, b]) => b);

    return countInversions(bCoordinates);
  }

  private getTotalNumberOfIntersections() {
    let totalIntersections = 0;

    for (let i = 0; i < this.matrix.length - 1; i++) {
      totalIntersections += this.getIntersectionsBetweenRows(
        this.matrix[i],
        this.matrix[i + 1]
      );
    }

    return totalIntersections;
  }

  private optimizeIntersectionsByBarycenter(
    fixedRow: WeaponMatrixRow<T>,
    mutableRow: WeaponMatrixRow<T>,
    sweepDirection: SweepDirection
  ) {
    const tempMutableRow = mutableRow.slice();

    tempMutableRow.sort((a, b) => {
      const aAdjacentIndices: number[] = [];
      const bAdjacentIndices: number[] = [];

      for (let i = 0; i < fixedRow.length; i++) {
        const fixedRowWeapon = fixedRow[i];

        if (sweepDirection === 'down') {
          if (fixedRowWeapon.buildsUpInto.has(a.name)) {
            aAdjacentIndices.push(i);
          }

          if (fixedRowWeapon.buildsUpInto.has(b.name)) {
            bAdjacentIndices.push(i);
          }
        } else {
          if (a.buildsUpInto.has(fixedRowWeapon.name)) {
            aAdjacentIndices.push(i);
          }

          if (b.buildsUpInto.has(fixedRowWeapon.name)) {
            bAdjacentIndices.push(i);
          }
        }
      }

      const aBaryCenterAverage = arrayAverage(aAdjacentIndices);
      const bBaryCenterAverage = arrayAverage(bAdjacentIndices);

      if (aBaryCenterAverage === bBaryCenterAverage) {
        if (Math.random() < 0.5) {
          return 1;
        }
      }

      return aBaryCenterAverage - bBaryCenterAverage;
    });

    return tempMutableRow;
  }

  private optimizeIntersectionsByPermutation(
    fixedRow: WeaponMatrixRow<T>,
    mutableRow: WeaponMatrixRow<T>,
    sweepDirection: SweepDirection
  ) {
    const shuffledMutableRow = shuffleArray(mutableRow);

    let minIntersections = this.getIntersectionsBetweenRows(
      sweepDirection === 'down' ? fixedRow : shuffledMutableRow,
      sweepDirection === 'down' ? shuffledMutableRow : fixedRow
    );
    let bestPermutation = shuffledMutableRow;

    const mutableRowPermutations = heapsAlgorithm(shuffledMutableRow.slice());
    mutableRowPermutations.forEach((permutation) => {
      const permutationIntersections = this.getIntersectionsBetweenRows(
        sweepDirection === 'down' ? fixedRow : permutation,
        sweepDirection === 'down' ? permutation : fixedRow
      );

      if (permutationIntersections < minIntersections) {
        minIntersections = permutationIntersections;
        bestPermutation = permutation;
      } else if (permutationIntersections === minIntersections) {
        if (Math.random() < 0.5) {
          bestPermutation = permutation;
        }
      }
    });

    return bestPermutation;
  }
}
