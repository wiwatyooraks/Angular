import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CatergoryComponent } from './catergory/catergory.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { Top1Component } from './top1/top1.component';
import { Top2Component } from './top2/top2.component';
import { Top3Component } from './top3/top3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatergoryComponent,
    NavbarComponent,
    SearchComponent,
    TopbannerComponent,
    Top1Component,
    Top2Component,
    Top3Component,

  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
