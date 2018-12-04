import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  dataSets: Array<any> = [{}];

  constructor() {
    this.dataSets = [{
      "name": "Taxes",
      "index": 5
    }, {
      "name": "Population",
      "index": 3,
    }]
   }

  ngOnInit() {
  }

  addDataSet() {
  }
}
