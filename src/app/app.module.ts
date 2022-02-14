import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './Cards/card.component';
import { RecipeCardComponent } from './Cards/recipeCard.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './header/topnavbar1.component';
import { TopNavBarComponent2 } from './header/topnavbar2.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesChickenLayoutComponent } from './Layout/recipes-chicken-layout.component';
import { HomeLayoutComponent } from './Layout/home-layout.component';
import { RecipesSnacksLayoutComponent } from './Layout/recipes-snacks-layout.component';
import { RecipesBreakfastLayoutComponent } from './Layout/recipes-breakfast-layout-component';
import { RecipesCookiesLayoutComponent } from './Layout/recipes-cookies-layout.component';
import { RecipesDessertLayoutComponent } from './Layout/recipes-dessert-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBarComponent2,
    CardComponent,
    RecipeCardComponent,
    FooterComponent,
    RecipesChickenLayoutComponent,
    HomeLayoutComponent,
    RecipesSnacksLayoutComponent,
    RecipesBreakfastLayoutComponent,
    RecipesCookiesLayoutComponent,
    RecipesDessertLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
