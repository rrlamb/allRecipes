import { Injectable } from "@angular/core";
import { AppetizerRecipeItemModel } from "../store/appetizers-and-snacks/appetizeritem.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
    providedIn: 'root'
})
export class Recipes2Service {
    
    constructor(private db: AngularFireDatabase) {

    }

    public getRecipes() {
        return this.db.list<AppetizerRecipeItemModel []>("Recipes-apps").valueChanges;
    }

    public getRecipe(index:number) {
        
    }
}