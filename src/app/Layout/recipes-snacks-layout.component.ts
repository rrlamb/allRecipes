import { Component, OnInit } from "@angular/core";
import { AppetizerRecipeItemModel } from "../store/appetizers-and-snacks/appetizeritem.model";
import { appetizerlist } from "../store/appetizers-and-snacks/appetizerlist.component";
import { Recipes2Service } from "../store/recipes2.service";


@Component({
    selector: 'ar-recipes-snacks-layout',
    templateUrl: 'recipes-snacks-layout.component.html'
})
export class RecipesSnacksLayoutComponent implements OnInit{
    title = 'allRecipes';
    appetizer: AppetizerRecipeItemModel [] = [];
  
  
  
    constructor(private recipes2Service:Recipes2Service){
    }
  ngOnInit(): void {
    this.recipes2Service.getRecipes().subscribe(data => {
      console.log("Fetching recipe data");
      for (var recipe of data) {
        console.log(recipe);
        this.appetizer.push(recipe);
      }
    })
  }
}