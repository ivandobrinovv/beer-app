import { Component, OnInit } from "@angular/core";
import { Beer } from "../models/beer.model";
import { BeerService } from "../services/beer.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  Beers: Beer[];

  constructor(private beerService: BeerService) { }

  getBeers() {
    this.beerService.getNewestBeers().subscribe((response: Beer[]) => {
      if (response.length) {
        this.Beers = response;
      } else {
        console.log("Something went wrong");
      }
    });
  }

  ngOnInit(): void {
    this.getBeers();
  }

}
