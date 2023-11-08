import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { landingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    landingPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
