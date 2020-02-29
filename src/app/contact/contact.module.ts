import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';
import { HomeModule } from '../home/home.module';
import { HeaderContactComponent } from './header-contact/header-contact.component';
import { HeaderComponent } from '../home/header/header.component';
import { SliderContactComponent } from './slider-contact/slider-contact.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { FooterComponent } from '../home/footer/footer.component';




@NgModule({
  declarations: [ContactLayoutComponent,HeaderContactComponent, SliderContactComponent, ContactUsComponent, ContactFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule
  ],
  exports:[
    HeaderContactComponent,
    ContactLayoutComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class ContactModule { }
