import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { HeaderComponent } from './components/header/header.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelCardExtendedComponent } from './components/hotel-card-extended/hotel-card-extended.component';


@NgModule({
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component,
    HeaderComponent,
    HotelCardComponent,
    HotelCardExtendedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
