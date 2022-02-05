import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './Cards/card.component';
import { RecipeCardComponent } from './Cards/recipeCard.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './header/topnavbar1.component';
import { TopNavBarComponent2 } from './header/topnavbar2.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBarComponent2,
    CardComponent,
    RecipeCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
