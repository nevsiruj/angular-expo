import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  visibleForm: boolean = true;
  mensajeEnviado: boolean = false;


  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.formBuilder.group({
      tipo: '',
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  submitForm(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    
    
    this.visibleForm = false;
    this.mensajeEnviado = true;

    this.sendEmail();
  }

  sendEmail() {
    const emailData = {
      tipo: 'contacto',
      nombre: this.contactForm.value.name,
      email: this.contactForm.value.email,
      telefono: this.contactForm.value.phone,
      message: this.contactForm.value.message
    };

    this.emailService.sendEmail(emailData).subscribe(
      (response) => {
        console.log('Correo electrónico enviado:', response);
        // Realiza cualquier acción adicional después de enviar el correo electrónico
      },
      (error) => {
        console.error('Error al enviar el correo electrónico:', error);
        // Realiza cualquier acción adicional en caso de error
      }
    );
  }

}
