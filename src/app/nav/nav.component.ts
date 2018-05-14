import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('toggleMenu', [
        state('hide', style({
            left: '-90%'
        })),
        state('show', style({
            left: '0'
        })),
        transition('hide => show', animate('200ms ease-in')),
        transition('show => hide', animate('200ms ease-out'))
    ])
  ]
})
export class NavComponent implements OnInit {
  isShow = 'show';

  menuItems = [
    { title: 'Home', page: '', icon: 'bandcamp', newNotification: 3 },
    { title: 'Options', page: 'options', icon: 'archive', newNotification: 0 },
    { title: 'Usage', page: 'usage', icon: 'address-book', newNotification: 1 },
    { title: 'Feedback', page: 'feedback', icon: 'chart-pie', newNotification: 8 }
  ];
  
  constructor() {
  }

  ngOnInit() {

  }
}


