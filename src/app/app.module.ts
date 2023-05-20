import { BrowserModule } from '@angular/platform-browser';
// import { LandingPageComponent } from '../landing-page/landing-page.component'; // Importa el componente LandingPageComponent
// import { LandingPageComponent } from '../landing-page/landing-page.component';
// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent], // Agrega LandingPageComponent en las declarations
//   imports: [BrowserModule, LandingPageComponent],
//   providers: [],
//   bootstrap: [AppComponent],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })
// export class AppModule {}

// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    // other components here
  ],
  imports: [
    BrowserModule,
    // other modules here
  ],
  providers: [],
  bootstrap: [LandingPageComponent],
})
export class AppModule {}
