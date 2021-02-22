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
    hotelCard.activities=["Sin regimen","Botella de agua de bienvenida","Lorem ipsum dolor sit amet consectetur","Lorem ipsum dolor sit amet consectetur adipiscing eli"];
    hotelCard.urlImage="./../../../assets/img/img1.png";
    this.hotelCardExtendedList.push(hotelCard);
    let hotelCard2:HotelCardExtended;
    hotelCard2 ={} as HotelCardExtended;
    hotelCard2.supertitle="SUPERTITULO";
    hotelCard2.title="Experiencias y programas SPA con agua";
    hotelCard2.description="Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum primisculus vulputate donec magna nulla montes sagittis. Vel dapibus parturient eros nisi scelerisque praesent potenti phasellus, et senectus felis sollicitudin justo non mi auctor, blandit dictum varius est nunc pellentesque tellus.";
    hotelCard2.activities=["Desayuno buffet completo","Lorem ipsum dolor sit amet consect","Lorem ipsum dolor sit am","Lorem ipsum dolor "];
    hotelCard2.urlImage="./../../../assets/img/img2.png";
    this.hotelCardExtendedList.push(hotelCard2);

  }

  toggleThisAccordion(element){
    element.classList.toggle("active");
    var panel = element.nextElementSibling;
        if (panel.style.display === "block" ||panel.style.display === "" ) {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
  }

}
