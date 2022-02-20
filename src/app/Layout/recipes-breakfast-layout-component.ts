import { Component } from "@angular/core";
import { BreakfastRecipeItemModel } from "../store/breakfast-and-brunch/breakfastitem.model";
import { breakfastlist } from "../store/breakfast-and-brunch/breakfast_list.component";


@Component({
    selector: 'ar-recipes-breakfast-layout',
    templateUrl: 'recipes-breakfast-layout.component.html'
})
export class RecipesBreakfastLayoutComponent {
    title = 'allRecipes';
    breakfast: BreakfastRecipeItemModel [] = [];
  
    constructor(){
      for (var recipe of breakfastlist) {
        console.log(recipe);
        this.breakfast.push(recipe);
      } 
    }
}