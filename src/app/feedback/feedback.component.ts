import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit  {
  charts = {
    chart1: {
      chartOptions: {
        responsive: true
      },
      chartData: [
        { data: [33, 60, 60, 100], label: 'Account A' },
        { data: [120, 45, 100, 40], label: 'Account B' },
        { data: [45, 67, 80, 50], label: 'Account C' }
      ],
      chartLabels: ['January', 'February', 'Mars', 'April']
    },
    chart2: {
      chartOptions: {
        responsive: true
      },
      chartData: [
        { data: [33, 60, 10], label: 'Lorem' },
        { data: [45, 67], label: 'Ipsum' }
      ],
      chartLabels: ['First quarter', 'Secound quarter', 'Third quarter', 'Quattro quarter']
    },
    chart3: {
      chartOptions: {
        responsive: true
      },
      chartData: [
        { data: [33, 60, 10], label: 'Lorem' }
      ],
      chartLabels: ['First quarter', 'Secound quarter']
    }
  };

  constructor() {
  }

  ngOnInit() {
  }
}
