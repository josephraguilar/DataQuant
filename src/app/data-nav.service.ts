import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
export interface IData {
  data: Array<number> | number;
  label: string;
}
export interface IDataSet {
  data: IData;
  dataSetName: string;
}

@Injectable({
  providedIn: 'root'
})



export class DataNavService {
  dataSets:BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor() {}

  emitData(data: Array<IDataSet>) {
    this.dataSets.next(data);
  }
}
