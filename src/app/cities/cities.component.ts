import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  template: `
    <ul class="list-group">
      <li
        class="list-group-item mt-1"
        [ngClass]="{
          'active': city?._id === selection?._id,
        }"
        (click)="onCitySelected(city)"
      >
        {{ city.name | titlecase }}
        <button
          *ngIf="city?._id === selection?._id"
          (click)="onCityDelete(city._id)"
          type="button" 
          class="btn btn-danger float-end">
        Delete</button>
      </li>
    </ul>
  `,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  @Input() city!: City;
  @Input() selection!: City;
  @Output() citySelected = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: City): void {
    this.citySelected.emit(city);
  }

  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }
}
