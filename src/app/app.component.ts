import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    const floatbtn = document.getElementById('floatbtn');
    this.checkIfAtTop(floatbtn!);
    window.addEventListener("scroll", () => {
      this.checkIfAtTop(floatbtn!);
    })
  }

  navToTop() {
    window.scrollTo(0, 0);
  }

  checkIfAtTop(floatbtn: HTMLElement) {
    if (window.scrollY < 100) {
      floatbtn!.style.display = "none";
    }
    else {
      floatbtn!.style.display = "flex"
    }
  }
}
