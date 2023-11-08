import { Component, Input, AfterViewInit } from '@angular/core';
import menu from "../../../assets/json/info.json";

@Component({
    selector: 'app-smallDetails',
    templateUrl: './smallDetails.component.html',
    styleUrls: ['./smallDetails.component.scss']
})
export class smallDetailsComponent implements AfterViewInit{
    @Input() text:string = "";
    @Input() left:number = 0;
    @Input() bottom:number = 0;

    ngAfterViewInit(): void {

    

    }
}




