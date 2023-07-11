import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { HomeComponent } from '../home/home.component';
import { QuienesSomosComponent } from '../quienes-somos/quienes-somos.component';
import { SponsorComponent } from '../sponsor/sponsor.component';
import { ParticipantesComponent } from '../participantes/participantes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienessomos', component: QuienesSomosComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'contacto', component: ContactFormComponent },
  { path: 'participantes', component: ParticipantesComponent },
  // Aquí agregamos una ruta comodín para capturar cualquier otra ruta
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}