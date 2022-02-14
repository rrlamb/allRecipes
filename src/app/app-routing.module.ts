import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCardComponent } from './Cards/recipeCard.component';
import { RecipesChickenLayoutComponent } from './Layout/recipes-chicken-layout.component';
import { HomeLayoutComponent } from './Layout/home-layout.component';
import { RecipesSnacksLayoutComponent } from './Layout/recipes-snacks-layout.component';
import { RecipesBreakfastLayoutComponent } from './Layout/recipes-breakfast-layout-component';
import { RecipesCookiesLayoutComponent } from './Layout/recipes-cookies-layout.component';
import { RecipesDessertLayoutComponent } from './Layout/recipes-dessert-layout.component';


const routes:Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  },
  {
    path: 'recipes-chicken', 
  component: RecipesChickenLayoutComponent
  },
  {
    path: 'home', 
    component: HomeLayoutComponent
  },
  {
    path: 'recipes-snacks',
    component: RecipesSnacksLayoutComponent
  },
  {
    path: 'recipes-breakfast',
    component: RecipesBreakfastLayoutComponent
  },
  {
    path: 'recipes-cookies',
    component: RecipesCookiesLayoutComponent
  },
  {
    path: 'recipes-dessert',
    component: RecipesDessertLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
