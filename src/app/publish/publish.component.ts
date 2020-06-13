import { BeerService } from "./../services/beer.service";
import { AllBeers } from "./../models/all-beers.model";
import { Beer } from "./../models/beer.model";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  rForm: FormGroup;
  beers: AllBeers[];
  models: string[];
  Beer: Beer;
  dateNow = Date.now();

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private beerService: BeerService
    ) { 
      this.rForm = this.fb.group({
        brand: ["", Validators.required],
        color: ["", Validators.required],
        bitterness: ["", Validators.required],
        year: ["", Validators.required],
        ImageUrl: ["", Validators.required],
      });
    }
    
  getBeerBrandsForDropdown() {
    this.beerService.getBeerBrandsForDropdown().subscribe((data: AllBeers[]) => {
      this.beers = data;
    });
  }

  ngOnInit(): void {
    this.getBeerBrandsForDropdown();
  }

  postBeer() {
    this.beerService
      .postBeer({ ...this.rForm.value, date: this.dateNow })
      .subscribe((data: any[]) => {
        if (data) {
          this.NavigeteToHome();
        }
      });
  }

  NavigeteToHome() {
    this.router.navigate(["Home"]);
  }

}
