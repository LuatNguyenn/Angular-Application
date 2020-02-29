import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule
  ],
  exports:[
    ItemListComponent
  ]
})
export class PagesModule { }
