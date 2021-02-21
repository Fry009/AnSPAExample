import { Component, OnInit } from '@angular/core';
import { HotelCard } from '../model/hotelCard';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {

  constructor() { }



  nStars:number;
  hotelCards:HotelCard[];


  ngOnInit(): void {
    this.nStars=5;
    this.hotelCards=[];
    this.loadHotelCardInfo();

  }

  loadHotelCardInfo(){
    let hotelCard:HotelCard;
    hotelCard ={} as HotelCard;
    hotelCard.title="Solo alojamiento";
    hotelCard.activities=["Sin regimen","Botella de agua de bienvenida"];
    this.hotelCards.push(hotelCard);
    let hotelCard2:HotelCard;
    hotelCard2 ={} as HotelCard;
    hotelCard2.title="Alojamiento y Desayuno";
    hotelCard2.activities=["Desayuno buffet completo"];
    this.hotelCards.push(hotelCard2);
    let hotelCard3:HotelCard;
    hotelCard3 ={} as HotelCard;
    hotelCard3.title="Lorem Ipsum";
    hotelCard3.activities=["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"];
    this.hotelCards.push(hotelCard3);
    let hotelCard4:HotelCard;
    hotelCard4 ={} as HotelCard;
    hotelCard4.title="Lorem Ipsum";
    hotelCard4.activities=["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"];
    this.hotelCards.push(hotelCard4);


  }

}
