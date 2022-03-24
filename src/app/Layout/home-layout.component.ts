import { Component, OnInit } from "@angular/core";
import { RecipeItemModel } from "../Cards/recipeitem.model";
import { recipelist } from "../Cards/recipelist.component";
import { RecipesService } from "../store/recipes.service";

@Component({
    selector: 'ar-home-layout',
    templateUrl: 'home-layout.component.html'
})
export class HomeLayoutComponent implements OnInit{
    title = 'allRecipes';
  recipes: RecipeItemModel [] = [];

  constructor(private recipesService:RecipesService){
  }
    ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(data => {
      console.log("Fetching recipe data");
      for (var recipe of data) {
        console.log(recipe);
        this.recipes.push(recipe);
      }
    })
  }
}