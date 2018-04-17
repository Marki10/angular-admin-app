import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  earnings = [];

  constructor (private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData()
      .subscribe(result => this.earnings = result.earnings);
  }
}