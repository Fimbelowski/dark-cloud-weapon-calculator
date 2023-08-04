import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.scss'],
})
export class EdgeComponent {
  @Input() from!: HTMLElement;
  @Input() to!: HTMLElement;

  @HostBinding('class.edge--on-build-up-path') @Input() onBuildUpPath = false;
  @HostBinding('style.left') get left() {
    const left = this.getElementMiddleOffset(this.from);
    return `${left}px`;
  }
  @HostBinding('style.top') get top() {
    const top = this.getElementBottomOffset(this.from);
    return `${top}px`;
  }
  @HostBinding('style.transform') get transform() {
    const fromX = this.getElementMiddleOffset(this.from);
    const fromY = this.getElementBottomOffset(this.from);

    const toX = this.getElementMiddleOffset(this.to);
    const toY = this.to.offsetTop;

    const xDiff = toX - fromX;
    const yDiff = toY - fromY;

    const rads = Math.atan2(yDiff, xDiff);

    return `rotate(${rads}rad)`;
  }
  @HostBinding('style.width') get width() {
    const fromX = this.getElementMiddleOffset(this.from);
    const fromY = this.getElementBottomOffset(this.from);

    const toX = this.getElementMiddleOffset(this.to);
    const toY = this.to.offsetTop;

    const xDiff = toX - fromX;
    const yDiff = toY - fromY;

    const distance = Math.ceil(Math.sqrt(xDiff ** 2 + yDiff ** 2));

    return `${distance}px`;
  }

  getElementBottomOffset({ offsetHeight, offsetTop }: HTMLElement) {
    return offsetTop + offsetHeight;
  }

  getElementMiddleOffset({ offsetLeft, offsetWidth }: HTMLElement) {
    return offsetLeft + offsetWidth / 2;
  }
}
