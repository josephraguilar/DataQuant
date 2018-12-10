import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
export interface IData {
  data: Array<number> | number;
  label: string;
}
export interface IDataSet {
  data: IData;
  dataSetName: string;
  xAxis: Array<string>
}

@Injectable({
  providedIn: 'root'
})

export class DataNavService {
  dataSets:BehaviorSubject<any> = new BehaviorSubject<any>([0]);
  activeDataSet:BehaviorSubject<any> = new BehaviorSubject([0]);
  constructor() {
  }

  emitData(data: Array<IDataSet>) {
    this.dataSets.next(data);
    if (data != null) {
    localStorage.setItem('dataSets', (JSON.stringify(data)));
    console.log(JSON.parse(localStorage.getItem('dataSets')));
    } else {
      localStorage.setItem('dataSets', (JSON.stringify([])));
    };
  }

  activateSet(index: number) {
    this.activeDataSet.next(index);
  }

  ngOnInit() {
  }
}
