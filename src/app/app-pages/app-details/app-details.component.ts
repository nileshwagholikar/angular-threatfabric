import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss']
})
export class AppDetailsComponent implements OnInit {
  date;
  constructor() { }

  ngOnInit() {
    const currentDate = new Date();
    this.date = currentDate.toLocaleString();
  }

}
