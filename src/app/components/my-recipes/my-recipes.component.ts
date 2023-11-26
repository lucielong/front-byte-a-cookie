import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../services/recipeService";
import {Router} from "@angular/router";
import {CommentService} from "../../services/commentService";

@Component({
    selector: 'app-my-recipes',
    templateUrl: './my-recipes.component.html',
    styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
    recipes: Recipe[] = [];

    constructor(private recipeService: RecipeService, private router: Router, private commentService: CommentService) {
    }

    ngOnInit() {
        this.recipeService.getRecipeByUser(3).subscribe((data: Recipe[]) => {
            this.recipes = data;
            this.recipes.forEach(recipe => {
                this.commentService.rateAverage(recipe.id).subscribe((ratingData: number) => {
                    recipe.rating = ratingData;
                });
            });
        });

    }

    redirectToRecipeDetail(recipeId: number | undefined) {
        this.router.navigate(['/recipe', recipeId]);
    }
}


