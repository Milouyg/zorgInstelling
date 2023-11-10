import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent{
    @Input() imgLeft: boolean = true;
    @Input() title: string = "";
    @Input() description: string = "";
}




