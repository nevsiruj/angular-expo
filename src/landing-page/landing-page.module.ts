import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { LandingPageComponent } from './landing-page.component'; // Importa el componente LandingPageComponent

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, PanelModule],
})
export class LandingPageModule {}
