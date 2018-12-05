import { Component, OnInit } from '@angular/core';
import {DataNavService} from "../data-nav.service";

interface IChartData {
  data:number;
  label:string;
}



@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})

export class InputFormComponent implements OnInit {

  newLabel: string;
  newData: number;
  dataSets: Array<any>;

  constructor(private _dataNavService: DataNavService) {
    this._dataNavService.dataSetNames.subscribe(dataSetNames => {
      this.dataSets = dataSetNames
    });
    this.newData = null;
    this.newLabel = null;
    this.dataSets = [];
  }

  async ngOnInit() {
  }

  saveToLocalStorage() {
    const newDataSet: IChartData = {
      data: this.newData,
      label: this.newLabel
    }
    this.dataSets.unshift(newDataSet);
    this._dataNavService.dataSetNames.next(this.dataSets);
    console.log(this._dataNavService.dataSetNames)
  }

  async getItemsFromLocalStorage(key: string) {
  }



}
