import { Component } from '@angular/core';
import menu from "../../../assets/json/info.json";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class landingPageComponent {
  title = 'zorgInstelling';
  menuItems = menu["menu"];

  constructor(){
    console.log(this.menuItems)
  }
}
