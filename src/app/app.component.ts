import { Component } from '@angular/core';
import { DataNavService, IData, IDataSet } from "./data-nav.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataquant';
  dataSets: Array<any>;
  activeSet: any;
  localData: any;

  constructor(private _dataNavService: DataNavService) {
    this._dataNavService.activeDataSet.subscribe( activeDataSet => {
      this.activeSet = activeDataSet
    })
  }

  ngOnInit() {
    this.fetchData();

    if (this.localData != null) { 
    this.dataSets = this.localData
    this._dataNavService.emitData(this.dataSets);
    } else {
      this._dataNavService.emitData([]);
    }

  }

  fetchData() {
    this.localData = JSON.parse(localStorage.getItem('dataSets'));
  }
}


