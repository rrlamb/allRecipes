import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeItemModel } from "../Cards/recipeitem.model";

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private baseURL:string = "https://allrecipes-602f9-default-rtdb.firebaseio.com/";
    private recipesEndpoint:string = "Recipes-general.json" ;

    constructor(private http:HttpClient) {

    }

    public getRecipes() {
        return this.http.get<RecipeItemModel []>(this.baseURL + this.recipesEndpoint);
    }

    public getRecipe(index:number) {
        return this.http.get<RecipeItemModel>(this.baseURL + 'Recipes-general/' + index + '.json');
    }
}