import { Component, OnInit } from '@angular/core';
import { DataNavService, IData, IDataSet } from "../data-nav.service";
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})

export class InputFormComponent implements OnInit {
  dataSetName: string;
  newLabel: string;
  newData: string;
  dataSets: [IDataSet];
  newDataArray: [number];
  newSet: IDataSet;

  constructor(private _dataNavService: DataNavService) {
    this.dataSetName = null;
    this.dataSets = null;
    this.newData = null;
    this.newLabel = null;
    this.newDataArray = [null];
    this._dataNavService.dataSets.subscribe(dataSets => {
      this.dataSets = dataSets;
    });
  }

  ngOnInit() {
    this._dataNavService.dataSets.subscribe(dataSets => {
      this.dataSets = dataSets;
    });
  }

  saveToDataService() {
    let splitString: Array<string> = this.newData.split(",");
    for (let i = 0; i < splitString.length; i++) {
      this.newDataArray[i] = parseInt(splitString[i])
    }

    const newDataSet: IData = {
      data: this.newDataArray,
      label: this.newLabel
    }

    this.newSet = {
      data: newDataSet,
      dataSetName: this.dataSetName
    }


    this.dataSets.push(this.newSet);
    this._dataNavService.emitData(this.dataSets);
  }
}
