import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { BeerDetailsComponent } from "./beer-details/beer-details.component";
import { SearchComponent } from "./search/search.component";
import { PublishComponent } from "./publish/publish.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/Home",
    pathMatch: "full"
  },
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "Details/:id",
    component: BeerDetailsComponent
  },
  {
    path: "Search",
    component: SearchComponent
  },
  {
    path: "Publish",
    component: PublishComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
