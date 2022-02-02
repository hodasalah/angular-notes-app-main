import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  myEndVal = 271.824
  myEndVal2 = 3265
  myEndVal3 = 22.569
  ngOnInit(): void {
  }

}
