import { Component } from '@angular/core';
import main from "../../../assets/json/info.json";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  main = main['main'];
  explanation = this.main['applicationProcess']['description'];

  explanationMobile = this.main['applicationProcess']['descriptionMobile']

  constructor() {
  }

  showExplanation(text: string) {
      this.explanation = text;
  }

  showDefaultText() {
    this.explanation = this.main['applicationProcess']['description'];

    this.explanationMobile = this.main['applicationProcess']['descriptionMobile']
  }
}
