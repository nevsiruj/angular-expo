import { BrowserModule } from '@angular/platform-browser';
// import { LandingPageComponent } from '../landing-page/landing-page.component'; // Importa el componente LandingPageComponent
import { LandingPageModule } from '../landing-page/landing-page.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Agrega LandingPageComponent en las declarations
  imports: [BrowserModule, LandingPageModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
