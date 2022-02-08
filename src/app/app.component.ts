import { Component } from '@angular/core';
import { RecipeItemModel } from './Cards/recipeitem.model';
import { recipelist } from './Cards/recipelist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allRecipes';
  recipes: RecipeItemModel [] = [];

  constructor(){
    for (var recipe of recipelist) {
      console.log(recipe);
      this.recipes.push(recipe);
    } 
  }
}
