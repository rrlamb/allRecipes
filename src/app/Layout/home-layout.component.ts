import { Component } from "@angular/core";
import { RecipeItemModel } from "../Cards/recipeitem.model";
import { recipelist } from "../Cards/recipelist.component";


@Component({
    selector: 'ar-home-layout',
    templateUrl: 'home-layout.component.html'
})
export class HomeLayoutComponent {
    title = 'allRecipes';
  recipes: RecipeItemModel [] = [];

  constructor(){
    for (var recipe of recipelist) {
      console.log(recipe);
      this.recipes.push(recipe);
    } 
  }
}