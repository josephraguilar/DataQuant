import { Component, OnInit } from '@angular/core';
import {DataNavService} from "../data-nav.service";

interface IChartData {
  data:Array<number>;
  label:string;
}



@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})

export class InputFormComponent implements OnInit {
  newLabel: string;
  newData: string;
  dataSets: Array<IChartData>;
  newDataArray: [number];

  constructor(private _dataNavService: DataNavService) {
    this._dataNavService.dataSetNames.subscribe(dataSetNames => {
      this.dataSets = dataSetNames
    });
    this.newData = null;
    this.newLabel = null;
    this.newDataArray = [null];
  }

  async ngOnInit() {
  }

  async saveToLocalStorage() {
     let splitString: Array<string> = this.newData.split(",");
     
     for(let i=0; i < splitString.length; i++){ 
       this.newDataArray[i] = parseInt(splitString[i])
     }

    const newDataSet: IChartData = {
      data: this.newDataArray,
      label: this.newLabel
    }
    
    this.dataSets.unshift(newDataSet);

    this._dataNavService.dataSetNames.next(this.dataSets);
    console.log("SAVED DATA   " + this.dataSets)
  }
}
