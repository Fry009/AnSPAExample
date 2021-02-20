import { Component, Input, OnInit } from '@angular/core';
import { HotelCard } from 'src/app/model/hotelCard';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  constructor() { }

  @Input() hotelCard:HotelCard;

  ngOnInit(): void {
  }

}
