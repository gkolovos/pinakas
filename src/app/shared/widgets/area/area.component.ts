import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions = {};

  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'areaspline'
      },
      title: {
          text: 'Average user activity during one week'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: '#FFFFFF'
      },
      xAxis: {
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ],
          plotBands: [{ // visualize the weekend
              from: 4.5,
              to: 6.5,
              color: 'rgba(68, 170, 213, .2)'
          }]
      },
      yAxis: {
          title: {
              text: 'hours a day'
          }
      },
      tooltip: {
          shared: true,
          valueSuffix: ' hours'
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'John',
          data: [3, 4, 3, 5, 4, 10, 12]
      }, {
          name: 'Jane',
          data: [1, 3, 4, 3, 3, 5, 7]
      }, {
        name: 'Leo',
        data: [4, 4, 3, 5, 4, 8, 12]
    }, {
        name: 'Gkol',
        data: [1, 4, 5, 2, 2, 3, 5]
    }
    ]
  };

  HC_exporting(Highcharts);

  }

}
