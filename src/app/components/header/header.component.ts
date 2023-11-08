import { Component } from '@angular/core';
import menu from "../../../assets/json/info.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'zorgInstelling';
  menuItems = menu["menu"];

  constructor(){
    console.log(this.menuItems)
  }
}
