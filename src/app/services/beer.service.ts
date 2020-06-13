import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Beer } from "../models/beer.model";
import { AllBeers } from "../models/all-beers.model";

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getNewestBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(
      `http://localhost:3000/beers?_sort=date&_order=desc&_limit=4`
    );
  }

  getBeerById(beerId): Observable<Beer> {
    return this.http.get<Beer>(`http://localhost:3000/beers/${beerId}`);
  }

  getBeerBrandsForDropdown(): Observable<AllBeers[]> {
    return this.http.get<AllBeers[]>(
      `http://localhost:3000/Allbeers?_sort=brand&_order=asc`
    );
  }

  getSearchedBeers(
    brand: string,
    color?: string,
    bitterness?: string,
    year?: string
  ): Observable<Beer[]> {
    return this.http.get<Beer[]>(
      `http://localhost:3000/beers?brand=${brand}` +
        (color ? `&color=${color}` : ``) +
        (bitterness ? `&bitterness=${bitterness}` : ``) +
        (year ? `&year=${year}` : ``)
    );
  }

  postBeer(beer: Beer) {
    return this.http.post(`http://localhost:3000/beers`, beer);
  }

  deleteBeer(id: string) {
    return this.http.delete(`http://localhost:3000/beers/` + id);
  }
}
