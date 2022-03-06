import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BreakfastRecipeItemModel } from "../store/breakfast-and-brunch/breakfastitem.model";

@Injectable({
    providedIn: 'root'
})
export class Recipes3Service {
    private baseURL:string = "https://allrecipes-602f9-default-rtdb.firebaseio.com/";
    private recipesEndpoint:string = "Recipes-breakfast.json" ;

    constructor(private http:HttpClient) {

    }

    public getRecipes() {
        return this.http.get<BreakfastRecipeItemModel []>(this.baseURL + this.recipesEndpoint);
    }

    public getRecipe(index:number) {
        return this.http.get<BreakfastRecipeItemModel>(this.baseURL + 'Recipes-general/' + index + '.json');
    }
}