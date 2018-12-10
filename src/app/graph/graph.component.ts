import { Component, ElementRef, ViewChild, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';
import { DataNavService, IData } from "../data-nav.service";
import { Chart } from 'chart.js';



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss',]

})

export class GraphComponent implements DoCheck {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  activeSet: number;
  public context: CanvasRenderingContext2D;
  myChart: any;
  chartxAxis: Array<any>
  chartData: Array<any>;
  chartLabel: Array<string>;
  chart1: any;
  changer: any;
  dataSetName: string;


  constructor(private _dataNavService: DataNavService) {
     this._dataNavService.activeDataSet.subscribe(activeDataSet => {
       this.activeSet = activeDataSet;
      this.changer = null;
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
      this.dataSetName = dataSets[this.activeSet].dataSetName;
      console.log('dsn  ->', this.dataSetName);
    })
  }


  ngOnInit() {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.makeChart();
  }

  ngDoCheck() {
    if (this.changer != this.activeSet) {
      this.makeChart()
      this.changer = this.activeSet;
      console.log("changer activated");
    }
  }




  makeChart() {

    this.chart1 = new Chart(this.context, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: this.chartxAxis[this.activeSet],
        datasets: [{
          label: this.chartLabel[this.activeSet],
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.chartData[this.activeSet],
        }]
      },
      // Configuration options go here
      options: {
        
      }
    });
  }
}
