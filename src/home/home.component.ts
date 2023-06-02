import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-homes',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('600ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private intervalId: any;

  constructor() {}

  ngOnInit() {
    this.updateCountdown();

    // Actualizar el contador cada segundo
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    // Limpiar el intervalo cuando el componente se destruya
    clearInterval(this.intervalId);
  }

  private updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date('August 19, 2023 00:00:00');

    const timeDifference = targetDate.getTime() - currentDate.getTime();

    if (timeDifference > 0) {
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    } else {
      // El tiempo objetivo ha pasado, establecer todas las unidades a 0
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.intervalId); // Detener el intervalo cuando el tiempo objetivo ha pasado
    }
  }
}
