import { Injectable } from "@angular/core";
import { RecipeItemModel } from "../Cards/recipeitem.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    constructor(private db: AngularFireDatabase) {

    }

    public getRecipes() {
        return this.db.list<RecipeItemModel>("Recipes-general").valueChanges();
    }

    public getRecipe(index:number) {
        
    }
}