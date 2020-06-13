import { Component, OnInit } from '@angular/core';

import { BeerService } from "./../services/beer.service";
import { AllBeers } from "./../models/all-beers.model";
import { Beer } from "./../models/beer.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  receivedAllBeers: AllBeers[];
  receivedBeers: Beer[];

  noBeersFound: Boolean;
  selectedBrand: string;
  selectedColor: string;
  selectedBitterness: string;
  selectedYear: string;

  constructor(private beerService: BeerService) { }

  getBeerBrandsForDropdown() {
    this.beerService
      .getBeerBrandsForDropdown()
      .subscribe((resoponse: AllBeers[]) => {
        this.receivedAllBeers = resoponse;
      });
  }

  getSearchedBeers() {
    this.beerService
      .getSearchedBeers(
        this.selectedBrand,
        this.selectedColor,
        this.selectedBitterness,
        this.selectedYear
      )
      .subscribe((resoponse: Beer[]) => {
        if (resoponse.length) {
          this.receivedBeers = resoponse;
          this.noBeersFound = false;
        } else {
          this.noBeersFound = true;
          this.receivedBeers = [];
        }
      });
  }

  ngOnInit(): void {
    this.getBeerBrandsForDropdown();
  }

}
