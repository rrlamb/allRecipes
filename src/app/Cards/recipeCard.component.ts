import { Component, Input } from "@angular/core";


@Component({
    selector: 'ar-recipecard',
    templateUrl: 'recipeCard.component.html',
    styleUrls: ['recipeCard.component.css']
})
export class RecipeCardComponent {
    @Input() img: string;
    @Input() name: string;
    @Input() description: string;

    constructor() {
        this.img = "./assets/Card3.jfif";
        this.name = "How to Make Southern Shrimp and Grits";
        this.description = "This Lowcountry classic is the solution to your comfort food cravings";
    }
}

