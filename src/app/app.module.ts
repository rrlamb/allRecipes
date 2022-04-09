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
import { AppetizersAndSnacksComponent } from './store/appetizers-and-snacks/appetizers-and-snacks.component';
import { BreakfastAndBrunchComponent } from './store/breakfast-and-brunch/breakfast-and-brunch.component';
import { BreakfastNavBarComponent } from './store/breakfast-and-brunch/breakfastNavbar.component';
import { AppetizerNavBarComponent } from './store/appetizers-and-snacks/appetizerNavBar.component';
import { BreakfastCardComponent } from './store/breakfast-and-brunch/breakfastCard.component';
import { AppCardComponent } from './store/appetizers-and-snacks/appCard.component';
import { UserInfoComponent } from './User-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddRecipeComponent } from './store/add-recipe/add-recipe.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    RecipesDessertLayoutComponent,
    AppetizersAndSnacksComponent,
    BreakfastAndBrunchComponent,
    BreakfastNavBarComponent,
    AppetizerNavBarComponent,
    BreakfastCardComponent,
    AppCardComponent,
    UserInfoComponent,
    AddRecipeComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
