import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataNavService {
  dataSetNames:BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
}
