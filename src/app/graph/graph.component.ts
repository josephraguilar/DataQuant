import { Component, OnInit } from '@angular/core';
import { DataNavService, IData } from "../data-nav.service";


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss',]

})



export class GraphComponent {


  data: Array<any>;
  dataSets: Array<IData>;
  dataSetLabels: Array<string>;
  public chartData: Array<IData> = [];
  public chartLabels:Array<string> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';





   constructor(private _dataNavService: DataNavService) {
    this.dataSets =null;
    this._dataNavService.dataSets.subscribe(dataSets => {
      this.chartData = dataSets.data;
      this.data = dataSets.map((item:any, i: number) => {
        return item.data;
      });
      this.chartLabels = this.data.map((item:any, i: number) => {
        return item.label;
      });
      


    });
    
    

  }



  ngOnInit() {
    this._dataNavService.dataSets.subscribe(dataSets => {
      // console.log('from graph component dataSetNames: ', dataSets);
      // console.log('from graph component chart labels  ' + this.chartLabels);
    });



  }

}

