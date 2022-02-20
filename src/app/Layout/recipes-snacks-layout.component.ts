import { Component } from "@angular/core";
import { AppetizerRecipeItemModel } from "../store/appetizers-and-snacks/appetizeritem.model";
import { appetizerlist } from "../store/appetizers-and-snacks/appetizerlist.component";


@Component({
    selector: 'ar-recipes-snacks-layout',
    templateUrl: 'recipes-snacks-layout.component.html'
})
export class RecipesSnacksLayoutComponent {
    title = 'allRecipes';
    appetizer: AppetizerRecipeItemModel [] = [];
  
    constructor(){
      for (var recipe of appetizerlist) {
        console.log(recipe);
        this.appetizer.push(recipe);
      } 
    }
}