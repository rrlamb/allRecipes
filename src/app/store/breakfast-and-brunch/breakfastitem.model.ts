
export class BreakfastRecipeItemModel {
    img: string;
    name: string;
    description: string;
    chef: string; 
 
    constructor(img: string, name: string, description: string, chef: string) {
        this.img = img;
        this.name = name;
        this.description = description;
        this.chef = chef;
        
    }
        
}