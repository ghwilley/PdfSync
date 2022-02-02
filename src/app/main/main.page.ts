import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css'],
})
export class MainPage implements OnInit {
  pdf1Src: string = '';
  pdf2Src: string = '';
  pdf1Page: number = 1;
  pdf2PageModifier: number = 0;
  pdfVis: boolean = true;
  constructor() {}

  ngOnInit() {}

  setPdfSrc(event: any, pdfViewer: number) {
    var tmppath = URL.createObjectURL(event.target.files[0]);
    if (pdfViewer == 1) {
      this.pdf1Src = tmppath;
    } else {
      this.pdf2Src = tmppath;
    }
  }

  getPdf2Page() {
    return this.pdf1Page + this.pdf2PageModifier;
  }

  togglePdfVis() {
    this.pdfVis = !this.pdfVis;
  }

  turnPage(increment: boolean) {
    if (increment) {
      this.pdf1Page++;
    } else {
      this.pdf1Page--;
    }
  }
}
