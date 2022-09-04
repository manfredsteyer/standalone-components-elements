import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toggle" [class.active]="active" (click)="toggle()">
      <slot></slot>
    </div>
  `,
  styles: [`
    .toggle {
      padding:10px;
      border: solid black 1px;
      cursor: pointer;
      display: inline
    }

    .active {
      background-color: lightsteelblue;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ToggleComponent {

  @Input() active = false;
  @Output() change = new EventEmitter<boolean>();

  toggle(): void {
    this.active = !this.active;
    this.change.emit(this.active);
  }

}
