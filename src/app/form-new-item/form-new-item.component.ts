import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent {
  @Input() label!: string;
  @Input() className!: string;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(item: string): void {
    console.log(item);
    this.newItemEvent.emit(item);
  }
}
