import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardItemComponent } from './card-item/card-item.component';
import { HeadingListComponent } from './heading-list/heading-list.component';
import { HeadingCardComponent } from './heading-card/heading-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardItemComponent,
    HeadingListComponent,
    HeadingCardComponent,
    CarouselComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
