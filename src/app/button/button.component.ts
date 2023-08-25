import {
  Component,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-button',
  // template: `<p>Hola Mundo </p>`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: City;

  ngOnChanges(changes: SimpleChanges): void {
    //Es el preimero que se ejecuta sin hay un input o un output. si no hay no se ejecuta.
    console.log('Changes ->', changes);
  }
  ngOnInit(): void {
    // se usa cuando se monta el componente (un llamdo auna api por jenplo), siempre se ejecuta, es el primero si no hay un input o un output.
    console.log('On init');
  }
  ngOnDestroy(): void {
    // se ejecuta
    console.log('On destroy');
  }
}
