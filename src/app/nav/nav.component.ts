import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuItems = [
    { title: 'Home', page: '', icon: 'bandcamp', newNotification: 3 },
    { title: 'Style', page: 'style', icon: 'bandcamp', newNotification: 0 },
    { title: 'Options', page: 'options', icon: 'archive', newNotification: 0 },
    { title: 'Usage', page: 'usage', icon: 'address-book', newNotification: 1 },
    { title: 'Feedback', page: 'feedback', icon: 'chart-pie', newNotification: 8 }
  ];
  
  constructor() {
  }

  ngOnInit() {

  }
}


