import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://expo-backend.somee.com'; // Reemplaza 'example.com/api' con la dirección URL de tu API

  constructor(private http: HttpClient) { }

  sendEmail(emailData: any) {
    return this.http.post(`${this.apiUrl}/sendemail`, emailData);
  }
}
