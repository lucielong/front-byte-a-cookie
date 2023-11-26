import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {BannerComponent} from './components/banner/banner.component';
import {ButtonsComponent} from './components/buttons/buttons.component';
import {ProfileBannerComponent} from './components/profile-banner/profile-banner.component';
import {SearchComponent} from './components/search/search.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {RecipeComponent} from './components/recipe/recipe.component';
import {AddRecipeComponent} from './components/add-recipe/add-recipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateRecipeComponent} from './components/update-recipe/update-recipe.component';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {MyRecipesComponent} from "./components/my-recipes/my-recipes.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
    declarations: [
        AppComponent,
        AppComponent,
        BannerComponent,
        ButtonsComponent,
        ProfileBannerComponent,
        SearchComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        RecipeComponent,
        AddRecipeComponent,
        UpdateRecipeComponent,
        SearchResultsComponent,
        MyRecipesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        CardComponent,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

