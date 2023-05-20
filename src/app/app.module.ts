import { NgModule } from '@angular/core';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageModule,
    // other components here
  ],
  imports: [
    LandingPageModule,
    // other modules here
  ],
  providers: [],
  bootstrap: [LandingPageComponent],
})
export class AppModule {}
