import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppetizerRecipeItemModel } from "../store/appetizers-and-snacks/appetizeritem.model";

@Injectable({
    providedIn: 'root'
})
export class Recipes2Service {
    private baseURL:string = "https://allrecipes-602f9-default-rtdb.firebaseio.com/";
    private recipesEndpoint:string = "Recipes-apps.json" ;

    constructor(private http:HttpClient) {

    }

    public getRecipes() {
        return this.http.get<AppetizerRecipeItemModel []>(this.baseURL + this.recipesEndpoint);
    }

    public getRecipe(index:number) {
        return this.http.get<AppetizerRecipeItemModel>(this.baseURL + 'Recipes-apps/' + index + '.json');
    }
}