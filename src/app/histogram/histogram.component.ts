import { Component, OnInit, ViewChild } from '@angular/core';
import { DataNavService, IData, IDataSet } from "../data-nav.service";
import { MatSort, MatTableDataSource } from '@angular/material';
import { createLViewData } from '@angular/core/src/render3/instructions';



@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  activeSet: number;
  dataSets: Array<IDataSet>;
  chartxAxis: Array<any>
  chartData: Array<any>;
  chartLabel: Array<string>;
  dataSetName: string;
  cDSum: number;

  ELEMENT_DATA: Array<any> = [];

  displayedColumns: string[] = ['bin', 'frequency', 'frequency %'];
  dataSource: any;




  constructor(private _dataNavService: DataNavService) {
    this._dataNavService.activeDataSet.subscribe(activeDataSet => {
      this.activeSet = activeDataSet;
      this.cDSum = null
    })



    this._dataNavService.dataSets.subscribe(dataSets => {
      this.chartData = dataSets.map((item: any, i: number) => {
        return item.data.data;
      });
      this.chartLabel = dataSets.map((item: any, i: number) => {
        return item.data.label;
      });
      this.chartxAxis = dataSets.map((item: any, i: number) => {
        return item.xAxis;
      });

      this.createData();
    })

  }

  ngOnInit() {

    

    this.ELEMENT_DATA = [
      { bin: 1, frequency: 'Hydrogen', frequencyPercent: 1.0079},
    ]
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;

    
  }

  createData() {
    let data = this.chartData[this.activeSet]
    for (let i = 0; i < data.length; i++) {
      this.cDSum += data[i];
    }
    console.log(this.cDSum);
      
  }
  

  }
