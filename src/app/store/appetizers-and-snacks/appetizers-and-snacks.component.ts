import { Component, Input} from '@angular/core';

@Component({
  selector: 'ar-appetizers-and-snacks',
  templateUrl: './appetizers-and-snacks.component.html',
  styleUrls: ['./appetizers-and-snacks.component.css']
})

  
export class AppetizersAndSnacksComponent {
  @Input() img: string;
  @Input() name: string;
  @Input() description: string;
  @Input() chef: string;

  constructor() {
  this.img = "./assets/Card3.jfif";
  this.name = "How to Make Southern Shrimp and Grits";
  this.description = "This Lowcountry classic is the solution to your comfort food cravings";
  this.chef = "chef name";
  }

}
