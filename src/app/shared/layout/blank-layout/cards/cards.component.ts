import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  cards: any[] = [
  { name: "stripe", image: 'assets/images/office-stripe.jpg', svg: 'assets/images/stripe.svg' },
  { name: "digitalOcean", image: 'assets/images/office-digital-ocean.jpg', svg: 'assets/images/digital-ocean.svg' },
  { name: "airbnb", image: 'assets/images/office-airbnb.jpg', svg: 'assets/images/airbnb.svg' },
  { name: "coinbase", image: 'assets/images/office-coinbase.jpg', svg: 'assets/images/coinbase.svg' },
  { name: "netflix", image: 'assets/images/office-netflix.jpg', svg: 'assets/images/netflix.svg' }
  ]
  ngOnInit(): void {
  }

}
