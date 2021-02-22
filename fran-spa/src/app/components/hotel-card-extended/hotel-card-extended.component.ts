import { Component, Input, OnInit } from '@angular/core';
import { HotelCardExtended } from 'src/app/model/hotelCardExtended';

@Component({
  selector: 'app-hotel-card-extended',
  templateUrl: './hotel-card-extended.component.html',
  styleUrls: ['./hotel-card-extended.component.scss']
})


export class HotelCardExtendedComponent implements OnInit {



  constructor() { }

  /*variables de entrada*/


@Input() hotelCardExtended: HotelCardExtended;


  ngOnInit(): void {
   //this.toggleAccordion();
    // this.hotelCardExtended={
    //   activities:[],
    //   description:"",
    //   supertitle:"",
    //   title:"",
    //   urlImage:""
    // };
  }


  toggleAccordionOnDocumentReadyS(){
    var acc = document.getElementsByClassName("btnCollapse");
    var i;
    debugger;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  toggleThisAccordion(element){
    element.classList.toggle("active");
    var panel = element.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
  }

  doSomething(element){
    debugger;
  }







}
