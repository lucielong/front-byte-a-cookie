import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {RecipeComponent} from "./components/recipe/recipe.component";
import {AddRecipeComponent} from "./components/add-recipe/add-recipe.component";
import {UpdateRecipeComponent} from "./components/update-recipe/update-recipe.component";
import {SearchResultsComponent} from "./components/search-results/search-results.component";
import {MyRecipesComponent} from "./components/my-recipes/my-recipes.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', component: HomeComponent},
    {path: 'recipe/:id', component: RecipeComponent},
    {path: 'add-recipe', component: AddRecipeComponent},
    {path: 'update-recipe/:id', component: UpdateRecipeComponent},
    {path: 'search', component: SearchResultsComponent},
    {path: 'my-recipes', component: MyRecipesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
