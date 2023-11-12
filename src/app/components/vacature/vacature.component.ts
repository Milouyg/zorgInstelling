import { Component, Input } from '@angular/core';
import main from "../../../assets/json/info.json";

@Component({
    selector: 'app-vacature',
    templateUrl: './vacature.component.html',
    styleUrls: ['./vacature.component.scss']
})
export class VacatureComponent{
    @Input() vacature!:any ;
    main = main["main"]["vacaturesInfo"]["vacatures"];
    
    constructor() {
        console.log(main)
    }
}




