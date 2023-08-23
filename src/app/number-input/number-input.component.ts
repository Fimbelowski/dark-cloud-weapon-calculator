import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) label!: string;
  @Input() max?: number;
  @Input() min?: number;
  @Input({ required: true }) value!: number;
}
