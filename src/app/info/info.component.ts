import { Component, OnInit, DoCheck, ViewChild, ElementRef,  } from '@angular/core';
import { DataNavService, IData } from "../data-nav.service";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, DoCheck {
  @ViewChild('myCanvas2') myCanvas2: ElementRef;

  activeSet: number;
  public context2: CanvasRenderingContext2D;
  myChart: any;
  chartxAxis: Array<any>
  chartData: Array<any>;
  chartLabel: Array<string>;
  chart2: any;
  changer: any;

  constructor(private _dataNavService: DataNavService) {
    this._dataNavService.activeDataSet.subscribe(activeDataSet => {
      this.activeSet = activeDataSet;
     console.log(activeDataSet)
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
  })
   }

  ngOnInit() {
    this.context2 = (<HTMLCanvasElement>this.myCanvas2.nativeElement).getContext('2d');
  }

  ngDoCheck() {


    if (this.changer != this.activeSet) {
      this.makeChart()
      this.changer = this.activeSet;
      console.log("changer activated");
    }
  }

  makeChart() {
    this.chart2 = new Chart(this.context2, {
    // The type of chart we want to create
    type: 'bar',
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
