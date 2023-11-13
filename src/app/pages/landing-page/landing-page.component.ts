import { Component } from '@angular/core';
import landingPage from "../../../assets/json/info.json";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  landingPage = landingPage["landingPage"];
}
