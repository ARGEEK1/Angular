import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent {
  @Input() label!: string;
  @Input() className!: string;
  @Input() selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  addNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }

  onUpdateItem(item: City, change: string): void {
    const city: City = {
      _id: item._id,
      name: change,
    };
    this.updateItemEvent.emit(city);
  }
}
