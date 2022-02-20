import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ar-breakfast-and-brunch',
  templateUrl: './breakfast-and-brunch.component.html',
  styleUrls: ['./breakfast-and-brunch.component.css']
})
export class BreakfastAndBrunchComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
