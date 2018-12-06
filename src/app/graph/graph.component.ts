import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataNavService, IData } from "../data-nav.service";
import { Chart } from 'chart.js'



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss',]

})



export class GraphComponent {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('myCanvas2') myCanvas2: ElementRef;

  public context: CanvasRenderingContext2D;
  public context2: CanvasRenderingContext2D;
  myChart: any;
  chartSeries: Array<any>
  chartData: Array<any>;
  chartLabel: string;
  chart1: any;
  chart2: any;

  constructor(private _dataNavService: DataNavService) {
  }


  ngOnInit() {
    this._dataNavService.dataSets.subscribe(dataSets => {
      this.chartData = dataSets.map((item: any, i: number) => {
        return item.data.data;
      });
      this.chartLabel = dataSets.map((item: any, i: number) => {
        return item.data.label;
      });
      this.chartSeries = dataSets.map((item: any, i: number) => {
        return item.xAxis;
      });


      if (this.chartData.length > 0) {
        // FIRST CHART
        this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
        this.chart1 = new Chart(this.context, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: this.chartSeries[0],
            datasets: [{
              label: this.chartLabel[0],
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: this.chartData[0],
            }]
          },
          // Configuration options go here
          options: {}
        });

        // SECOND CHART
        this.context2 = (<HTMLCanvasElement>this.myCanvas2.nativeElement).getContext('2d');
        this.chart2 = new Chart(this.context2, {
          // The type of chart we want to create
          type: 'bar',

          // The data for our dataset
          data: {
            labels: this.chartSeries[0],
            datasets: [{
              label: this.chartLabel[0],
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: this.chartData[0],
            }]
          },
          // Configuration options go here
          options: {}
        });
      };
    })
  }
}

