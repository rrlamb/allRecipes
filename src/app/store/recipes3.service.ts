import { Injectable } from "@angular/core";
import { BreakfastRecipeItemModel } from "../store/breakfast-and-brunch/breakfastitem.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
    providedIn: 'root'
})
export class Recipes3Service {
    
    constructor(private db: AngularFireDatabase) {

    }

    public getRecipes() {
        return this.db.list<BreakfastRecipeItemModel>("Recipes-breakfast").valueChanges();
    }

    public getRecipe(index:number) {
        
    }
}