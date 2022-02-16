import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  property : any ={
    "id":1,
    "name": 'VIP House',
    "price":200000

  }
  constructor() { }

  ngOnInit(): void {
  }

}