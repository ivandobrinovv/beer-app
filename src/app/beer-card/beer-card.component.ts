import { Component, OnInit } from '@angular/core';

import { Beer } from "../models/beer.model";
import { Input } from "@angular/core";

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {
  @Input() Beer: Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
