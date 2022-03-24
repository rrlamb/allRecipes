import { Component, OnInit } from '@angular/core';
import { RecipeItemModel } from 'src/app/Cards/recipeitem.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'ar-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(public rs : RecipesService) { }

  ngOnInit(): void {
  }

  addRecipe(recipe : RecipeItemModel) {
    console.log("You clicked add recipe");
    console.log(recipe);
    this.rs.addRecipe(recipe);
  }
}
