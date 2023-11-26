import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    searchTerm: string = '';
    filteredRecipes: any[] = [];

    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.searchTerm = params['name'];
            this.searchRecipe();
        });
    }

    searchRecipe(): void {
        if (this.searchTerm.trim() !== '') {
            this.http.get<any>(`http://localhost:8080/recipes/search?name=${this.searchTerm}`).subscribe(
                (data) => {
                    this.filteredRecipes = data;
                    console.log(this.filteredRecipes);
                },
                (error) => {
                    console.error('Une erreur est survenue lors de la recherche de recette :', error);
                }
            );
        } else {
            console.log('Veuillez saisir un terme de recherche.');
        }
    }

    getImageForRecipe(recipeName: string): string {
        return `./assets/recipePictures/${recipeName.toLowerCase()}.png`;
    }

    redirectToRecipeDetail(recipeId: number | undefined) {
        this.router.navigate(['/recipe', recipeId]);
    }
}
