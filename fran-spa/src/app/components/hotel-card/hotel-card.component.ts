import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelCard } from 'src/app/model/hotelCard';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {


  constructor() { }

  @Input() hotelCard:HotelCard;
  @Input() isActive:number;


  item="";
  ngOnInit(): void {
    // this.hotelCard.title="";
    // this.hotelCard.activities=[""];
    let aux="noseke";


  }



}
