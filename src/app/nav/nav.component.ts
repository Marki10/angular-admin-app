import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuItems = [
    { title: 'Home', page: '', icon: 'bandcamp'},
    { title: 'Style', page: 'style', icon: 'bandcamp'},
    { title: 'Options', page: 'options', icon: 'address-book' },
    { title: 'Usage', page: 'usage', icon: 'address-book' },
    { title: 'Feedback', page: 'feedback', icon: 'archive' }
  ];
  
  constructor() {
  }

  ngOnInit() {

  }
}


