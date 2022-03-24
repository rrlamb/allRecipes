import { Component, OnInit } from "@angular/core";
import { BreakfastRecipeItemModel } from "../store/breakfast-and-brunch/breakfastitem.model";
import { breakfastlist } from "../store/breakfast-and-brunch/breakfast_list.component";
import { Recipes3Service } from "../store/recipes3.service";

@Component({
    selector: 'ar-recipes-breakfast-layout',
    templateUrl: 'recipes-breakfast-layout.component.html'
})
export class RecipesBreakfastLayoutComponent implements OnInit{
    title = 'allRecipes';
    breakfast: BreakfastRecipeItemModel [] = [];
  
    constructor(private recipes3Service:Recipes3Service){
    }
      ngOnInit(): void {
        this.recipes3Service.getRecipes().subscribe(data => {
          console.log("Fetching recipe data");
          for (var recipe of data) {
            console.log(recipe);
            this.breakfast.push(recipe);
          }
        })
      
    }
}