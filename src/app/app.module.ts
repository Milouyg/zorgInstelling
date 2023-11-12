import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ArticleComponent } from './components/article/article.component';
import { VacatureComponent } from './components/vacature/vacature.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    MainComponent,
    ArticleComponent,
    VacatureComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
