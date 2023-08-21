import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  QueryList,
  type Signal,
  ViewChildren,
  ChangeDetectorRef,
} from '@angular/core';

import type { IWeaponMatrix } from 'src/services/weapons/IWeaponMatrix';
import type Weapon from 'src/services/weapons/Weapon';
import { WeaponComponent } from '../weapon/weapon.component';
import type WeaponGraph from 'src/services/graphs/WeaponGraph';
import type WeaponType from 'src/services/weapons/WeaponType';
import type WeaponNameByType from 'src/services/weapons/WeaponNameByType';

@Component({
  selector: 'app-weapon-graph',
  templateUrl: './weapon-graph.component.html',
  styleUrls: ['./weapon-graph.component.scss'],
})
export class WeaponGraphComponent<T extends WeaponType>
  implements AfterViewInit, OnChanges
{
  constructor(private cd: ChangeDetectorRef) {}

  @Input({ required: true }) destinationWeapon!: Signal<Weapon<T> | undefined>;
  @Input({ required: true }) sourceWeapon!: Signal<Weapon<T> | undefined>;
  @Input({ required: true }) weaponGraph!: Readonly<WeaponGraph<T>>;

  @Output() destinationWeaponChangeEvent = new EventEmitter<
    Weapon<T> | undefined
  >();
  @Output() sourceWeaponChangeEvent = new EventEmitter<Weapon<T> | undefined>();

  @HostBinding('style.grid-template-columns') get columns() {
    const columns = Math.max(...this.weaponMatrix.map((row) => row.length));
    return `repeat(${columns}, 1fr)`;
  }

  @HostBinding('style.grid-template-rows') get rows() {
    const rows = this.weaponMatrix.length;
    return `repeat(${rows}, 1fr)`;
  }

  @ViewChildren(WeaponComponent, { read: ElementRef })
  children!: QueryList<ElementRef>;

  edges = new Map<HTMLElement, Set<HTMLElement>>();
  weaponMatrix: IWeaponMatrix<T> = [];
  weaponElementsByName = new Map<WeaponNameByType[T], HTMLElement>();

  sourceOrDestinationToSetNext: 'destination' | 'source' = 'source';

  buildUpOptions: Signal<Map<WeaponNameByType[T], Weapon<T>>> = computed(() =>
    this.weaponGraph.getWeaponBuildUpOptions(
      this.sourceWeapon(),
      this.destinationWeapon()
    )
  );

  edgesOnBuildUpPath: Signal<Map<HTMLElement, Set<HTMLElement>>> = computed(
    () => {
      const edgesOnBuildUpPath = new Map<HTMLElement, Set<HTMLElement>>();

      this.buildUpOptions().forEach((weapon) => {
        const weaponElement = this.getWeaponElementByName(weapon.name);

        if (!edgesOnBuildUpPath.has(weaponElement)) {
          edgesOnBuildUpPath.set(weaponElement, new Set());
        }

        weapon.buildsUpInto.forEach((buildUpWeapon) => {
          if (this.buildUpOptions().has(buildUpWeapon.name)) {
            const buildUpWeaponElement = this.getWeaponElementByName(
              buildUpWeapon.name
            );

            edgesOnBuildUpPath.get(weaponElement)?.add(buildUpWeaponElement);
          }
        });
      });

      return edgesOnBuildUpPath;
    }
  );

  ngOnChanges() {
    this.weaponMatrix = this.weaponGraph.toMatrix();
  }

  ngAfterViewInit() {
    this.buildWeaponElementsByName();
    this.buildEdges();

    this.cd.detectChanges();
  }

  buildEdges() {
    this.weaponGraph.vertices.forEach(({ data: { buildsUpInto, name } }) => {
      const weaponElement = this.getWeaponElementByName(name);

      if (!this.edges.has(weaponElement)) {
        this.edges.set(weaponElement, new Set());
      }

      buildsUpInto.forEach(({ name }) => {
        const buildUpWeaponElement = this.getWeaponElementByName(name);
        this.edges.get(weaponElement)?.add(buildUpWeaponElement);
      });
    });
  }

  buildWeaponElementsByName() {
    const flatMatrix = this.weaponMatrix.flat();
    this.children.forEach((child, index) => {
      const weaponElement = child.nativeElement;
      this.weaponElementsByName.set(flatMatrix[index].name, weaponElement);
    });
  }

  getWeaponElementByName(name: WeaponNameByType[T]) {
    const element = this.weaponElementsByName.get(name);

    if (element === undefined) {
      throw Error(`Element not found for weapon "${name}"`);
    }

    return element;
  }

  isEdgeOnBuildUpPath(from: HTMLElement, to: HTMLElement) {
    if (this.sourceWeapon() === undefined) {
      return true;
    }

    return this.edgesOnBuildUpPath().get(from)?.has(to) ?? false;
  }

  isWeaponOnBuildUpPath({ name }: Weapon<T>) {
    return this.buildUpOptions().has(name);
  }

  onWeaponClick(weapon: Weapon<T>) {
    if (
      this.sourceWeapon() === undefined ||
      !this.isWeaponOnBuildUpPath(weapon)
    ) {
      this.sourceWeaponChangeEvent.emit(weapon);
      this.destinationWeaponChangeEvent.emit(
        weapon.buildsUpInto.size === 0 ? weapon : undefined
      );

      this.sourceOrDestinationToSetNext = 'destination';
      return;
    }

    if (this.sourceOrDestinationToSetNext === 'source') {
      this.sourceWeaponChangeEvent.emit(weapon);
      this.destinationWeaponChangeEvent.emit(undefined);
      this.sourceOrDestinationToSetNext = 'destination';
      return;
    }

    this.destinationWeaponChangeEvent.emit(weapon);
    this.sourceOrDestinationToSetNext = 'source';
  }
}
