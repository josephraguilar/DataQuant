import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

export interface IData {
  data: Array<number> | number;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataNavService {
  dataSetNames:Subject<Array<IData>> = new Subject<Array<IData>>();

  constructor() {}

  emitData(data: Array<IData>) {
    this.dataSetNames.next(data);
  }
}
