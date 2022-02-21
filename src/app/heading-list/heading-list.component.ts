import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-list',
  templateUrl: './heading-list.component.html',
  styleUrls: ['./heading-list.component.css']
})
export class HeadingListComponent implements OnInit {
headingList=[1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
