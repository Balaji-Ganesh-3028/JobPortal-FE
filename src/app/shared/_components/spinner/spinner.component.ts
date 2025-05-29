import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() color?: ThemePalette = 'primary';
  @Input() diameter?: number = 100;
  @Input() strokeWidth?: number = 5;
  @Input() value?: number = 50;
  @Input() mode?: 'determinate' | 'indeterminate' = 'indeterminate';
}
