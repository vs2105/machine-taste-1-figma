import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct'],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40,20,30,35 ], label: 'Series A',backgroundColor: '#AAA3FF'
    },
      { data: [ 28, 48, 40, 19, 86, 27, 90,40,20,40], label: 'Series B', backgroundColor:'#262626'},
      
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };


  //pie

  public pieChartLegend = false;
  public pieChartPlugins = [];



  public pieChartLabels = [ [ 'Download', 'Sales',], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 150, 100, 100,100 ],backgroundColor:['#A3EEFF','#484848','#9A9A9A','#AAA3FF']
  } ];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
