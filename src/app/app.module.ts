import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BeerService } from "./services/beer.service";
import { HttpClientModule } from "@angular/common/http";
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { SearchComponent } from './search/search.component';
import { PublishComponent } from './publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeerDetailsComponent,
    BeerCardComponent,
    SearchComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
