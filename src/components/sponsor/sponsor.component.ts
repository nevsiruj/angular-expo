import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Enviar el formulario
    alert('Correcto');
  }

}