import { Component, OnInit } from '@angular/core';
import {DataNavService} from "../data-nav.service";



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  dataSets: Array<any> = [];

  constructor(private _dataNavService: DataNavService) {
    this._dataNavService.dataSetNames.subscribe(dataSetNames => {
      this.dataSets = dataSetNames
    });
  }

  async ngOnInit() {
  }
}
