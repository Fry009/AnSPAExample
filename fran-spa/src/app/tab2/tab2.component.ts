import { HotelCardExtended } from './../model/hotelCardExtended';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {

hotelCardExtendedList : HotelCardExtended[];

  constructor() { }

  ngOnInit(): void {
    this.hotelCardExtendedList=[];
    this.loadHotelCardExtendedInfo();
  }

  loadHotelCardExtendedInfo(){
    let hotelCard: HotelCardExtended;
    hotelCard ={} as HotelCardExtended;
    hotelCard.supertitle="SUPERTITULO";
    hotelCard.title="Olvídese de la rutina";
    hotelCard.description="Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum primisculus vulputate donec magna nulla montes sagittis. Vel dapibus parturient eros nisi scelerisque praesent potenti phasellus, et senectus felis sollicitudin justo non mi auctor, blandit dictum varius est nunc pellentesque tellus.";
    hotelCard.activities=["Sin regimen","Botella de agua de bienvenida","Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum primisculus vulputate donec magna nulla montes sagittis","Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum primisculus vulputate donec magna nulla montes sagittis"];
    this.hotelCardExtendedList.push(hotelCard);
    let hotelCard2:HotelCardExtended;
    hotelCard2 ={} as HotelCardExtended;
    hotelCard2.supertitle="SUPERTITULO";
    hotelCard2.title="Experiencias y programas SPA con agua";
    hotelCard.description="Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum primisculus vulputate donec magna nulla montes sagittis. Vel dapibus parturient eros nisi scelerisque praesent potenti phasellus, et senectus felis sollicitudin justo non mi auctor, blandit dictum varius est nunc pellentesque tellus.";
    hotelCard2.activities=["Desayuno buffet completo","Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum primis","Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum primis","Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum primis"];
    this.hotelCardExtendedList.push(hotelCard2);

  }

}
