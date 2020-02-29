import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OfferComponent } from './offer/offer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, SliderComponent, WelcomeComponent, FeedbackComponent, OfferComponent, TestimonialsComponent, NewsComponent, FooterComponent, HomeLayoutComponent, MainPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent, SliderComponent, WelcomeComponent, FeedbackComponent, OfferComponent, TestimonialsComponent, NewsComponent, FooterComponent
  ]
})
export class HomeModule { }
