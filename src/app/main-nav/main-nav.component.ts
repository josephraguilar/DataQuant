import { Component, OnInit } from '@angular/core';
import {DataNavService, IData, IDataSet} from "../data-nav.service";



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  dataSets: Array<IDataSet>;

  constructor(private _dataNavService: DataNavService) {
    this._dataNavService.dataSets.subscribe(dataSets => {
      this.dataSets = dataSets;
    });
  }

  async ngOnInit() {
  }
}
