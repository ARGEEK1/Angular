import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: ` 
      <li
        [ngClass]="{
          'alert alert-info': city === selection,
          blue: city === selection
        }"
        (click)="onCityClicked(city)"
      >
        {{ city | titlecase }}
      </li>`,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string;
  @Output() cityClicked = new EventEmitter<string>();
  
  onCityClicked(city: string): void {
    this.cityClicked.emit(city);
  }
}
