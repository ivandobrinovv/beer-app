import { Component, OnInit } from '@angular/core';
import { Beer } from "./../models/beer.model";
import { ActivatedRoute } from "@angular/router";
import { BeerService } from "./../services/beer.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {
  beerId: string;
  beer: Beer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private beerService: BeerService,
    private router: Router
  ) {
    this.beerId = this.activatedRoute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    this.beerService
      .getBeerById(this.beerId)
      .subscribe((response: Beer) => (this.beer = response));
  }

  deleteBeer() {
    this.beerService.deleteBeer(this.beerId).subscribe((res) => {
      this.NavigeteToHome();
    });
  }

  NavigeteToHome() {
    this.router.navigate(["Home"]);
  }
}
