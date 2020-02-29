import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { Routes, RouterModule } from '@angular/router'

import { MainPageComponent } from './home/main-page/main-page.component';
import { ContactLayoutComponent } from './contact/contact-layout/contact-layout.component';
import { ContactModule } from './contact/contact.module';
import { PagesModule } from './pages/pages.module';
import { ItemListComponent } from './pages/item-list/item-list.component';
const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path:'contact',component:ContactLayoutComponent},
  {path:'pages',component:ItemListComponent}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ContactModule,
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
