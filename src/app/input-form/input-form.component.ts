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
  dataSets: Array<any>;
  newDataArray: [number];
  newSet: IDataSet;
  xAxisInput: string;
  xAxis: Array<string>;

  constructor(private _dataNavService: DataNavService) {
    this.xAxis = null;
    this.dataSetName = null;
    this.dataSets = [];
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

    this.xAxis = this.xAxisInput.split(",");

    const newDataSet: IData = {
      data: this.newDataArray,
      label: this.newLabel
    }

    this.newSet = {
      data: newDataSet,
      dataSetName: this.dataSetName,
      xAxis: this.xAxis
    }


    this.dataSets.unshift(this.newSet);
    this._dataNavService.emitData(this.dataSets);
  }
}
