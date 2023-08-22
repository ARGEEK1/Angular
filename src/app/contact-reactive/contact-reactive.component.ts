import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  name!: string;
  departments: string[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departments'];
    this.route.queryParams.subscribe((params: Params) => {
      this.name = params['name']; 
    });
    this.contactForm = this.initForm();
    this.onPathValue();
    //this.onSetValue();
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'jose' });
  }

  // onSetValue(): void {
  //   this.contactForm.setValue({ comment: 'hello word' });
  // } este metodo obliga a setear todas las propiedades del formulario, si no da error en la consola.

  onSubmit(): void {
    console.log('onSubmit', this.contactForm.value);
  }

  initForm(): FormGroup {
    // en este metodo declararemo sla propiedades de nuestro formulario, y los haremos con el formBuilder
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      departament: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }
}
