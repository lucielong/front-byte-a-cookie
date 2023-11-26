import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../services/recipeService";
import {CommentService} from "../../services/commentService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    recipes: Recipe[] = [];

    constructor(private recipeService: RecipeService, private router: Router, private commentService: CommentService) {}

    ngOnInit() {
        this.recipeService.listRecipes().subscribe((data: Recipe[]) => {
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

