import { Component } from '@angular/core';
import main from "../../../assets/json/info.json";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
    main = main["main"];

    constructor(){
        console.log(main);
    }

}
