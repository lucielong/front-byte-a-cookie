import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';

import {Recipe} from "../models/recipe.model";

@Injectable({
    providedIn: 'root',
})
export class RecipeService {

    private baseUrl = 'http://localhost:8080/recipes';

    constructor(private http: HttpClient) {
    }

    listRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.baseUrl);
    }

    getRecipe(id: number): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
    }

    getRecipeByUser(id: number): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.baseUrl}/searchByClient/${id}`);
    }

    createRecipe(recipe: Recipe): Observable<Recipe | null> {
        return this.http.post<Recipe>(this.baseUrl, recipe)
            .pipe(
                catchError((error: any) => {
                    console.error('Error during recipe creation:', error);
                    return of(null);
                })
            );
    }

    updateRecipe(recipe: Recipe): Observable<Recipe | null> {
        return this.http.put<Recipe>(`${this.baseUrl}/${recipe.id}`, recipe)
            .pipe(
                catchError((error: any) => {
                    console.error('Error during recipe update:', error);
                    return of(null);
                })
            );
    }

    deleteRecipe(id: number | undefined): Observable<Recipe | null> {
        return this.http.delete<Recipe>(`${this.baseUrl}/${id}`)
            .pipe(
                catchError((error: any) => {
                    console.error('Error during recipe deletion:', error);
                    return of(null);
                })
            );
    }
}
