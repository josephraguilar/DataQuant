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

  deleteDataSet(index: number) {
    console.log(index);
    this.dataSets.splice(index,1);
    this._dataNavService.emitData(this.dataSets);
  }
}
