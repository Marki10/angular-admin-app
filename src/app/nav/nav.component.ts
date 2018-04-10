import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuItems = [
    { title: 'Style', page: 'style' },
    { title: 'Options', page: 'options' },
    { title: 'Feedback', page: 'feedback' }
  ];
  
  constructor() {
  }

  ngOnInit() {

  }
}


