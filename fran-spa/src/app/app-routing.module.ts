import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Server } from 'http';


const routes: Routes = [
  { path: '', redirectTo: '/tab_1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
