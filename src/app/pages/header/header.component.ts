import { Component } from '@angular/core';
import menu from "../../../assets/json/info.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  menuItems = menu["menu"];

    openBtn(){
        console.log("test")
    }

}
