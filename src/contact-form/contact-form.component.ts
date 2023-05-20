import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;
      console.log('Form Values:', formValues);
      // Aquí puedes añadir la lógica para enviar estos datos a tu servidor o servicio de email.
    } else {
      console.log('Form is not valid');
    }
  }
}
