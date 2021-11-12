import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {


  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: 
    [
      {
        type: "pie",
        // data: [1, 2, 3, 4, 5]
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
