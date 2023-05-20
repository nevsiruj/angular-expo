import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPageModule } from '../landing-page/landing-page.module';
// import { LandingPageModule } from '../landing-page/landing-page.module';

@NgModule({
  declarations: [
    LandingPageModule,
    // other components here
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    // other modules here
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
