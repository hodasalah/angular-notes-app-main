import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {
  @Input() banner!: boolean
  @Input() darkSec!: boolean
  @Input() card!: boolean
  @Input() cardDark!: boolean
  constructor() { }

  ngOnInit(): void {
  }
  getCssClasses() {
    if (this.banner) {
      return 'shape shape-fluid-x shape-bottom text-light pb-15 pb-md-4';
    }
    if (this.darkSec) {
      return 'shape shape-fluid-x shape-bottom text-white';
    }
    if (this.card) {
      return 'shape shape-fluid-x shape-top text-white';
    }
    if(this.cardDark){
      return 'shape shape-fluid-x shape-top text-white pb-15';
    }
    return ''
  }
}
