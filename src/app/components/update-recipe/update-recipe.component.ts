import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../services/recipeService";
import {Recipe} from "../../models/recipe.model";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../../services/messageService";


@Component({
    selector: 'app-update-recipe',
    templateUrl: './update-recipe.component.html',
    styleUrls: ['./update-recipe.component.scss']
})
export class UpdateRecipeComponent implements OnInit {
    recipeForm: FormGroup;
    ingredients: FormArray;
    descriptions: FormArray;
    id: number;
    recipe: Recipe;

    constructor(private route: ActivatedRoute, private formbuilder: FormBuilder, private recipeService: RecipeService, private messageService: MessageService) {
        this.ingredients = this.formbuilder.array([]);
        this.descriptions = this.formbuilder.array([]);
        this.recipeForm = this.formbuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            ingredients: this.ingredients,
            descriptions: this.descriptions,
        });
        this.id = 0;
        this.recipe = {} as Recipe;
    }


    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.recipeService.getRecipe(this.id).subscribe((data: Recipe) => {
                this.recipe = data;
                this.recipe.steps = this.recipe.description.split('\,');
                this.recipe.listIngredients = this.recipe.ingredients.split('\,');

                this.recipeForm = this.formbuilder.group({
                    name: [this.recipe.name, Validators.required],
                    descriptions: this.formbuilder.array(this.recipe.steps.map((step: string) => this.formbuilder.control(step))),
                    difficulty: [this.recipe.difficulty, Validators.required],
                    time: [this.recipe.time, [Validators.required, Validators.min(1)]],
                    ingredients: this.formbuilder.array(this.recipe.listIngredients.map((ingredient: string, index: number) => {
                        const ingredientArray = ingredient.split(' ');
                        return this.formbuilder.group({
                            ingredient: [ingredientArray[3], Validators.required],
                            unit: [ingredientArray[1], Validators.required],
                            quantity: [ingredientArray[0], [Validators.required, Validators.min(1)]]
                        });
                    })),
                });
                this.recipe.steps.forEach((description: string) => {
                    this.descriptions.push(this.formbuilder.control(description));
                });
                this.recipe.listIngredients.forEach((ingredient: string) => {
                    const ingredientArray = ingredient.split(' ');
                    this.ingredients.push(this.formbuilder.group({
                        ingredient: [ingredientArray[3], Validators.required],
                        unit: [ingredientArray[1], Validators.required],
                        quantity: [ingredientArray[0], [Validators.required, Validators.min(1)]]
                    }));
                });

            });
        });
        this.descriptions = this.recipeForm.get('descriptions') as FormArray;
        this.ingredients = this.recipeForm.get('ingredients') as FormArray;
    }

    addIngredient() {
        this.ingredients.push(this.formbuilder.group({
            ingredient: ['', Validators.required],
            unit: ['', Validators.required],
            quantity: ['', [Validators.required, Validators.min(1)]]
        }));
    }

    removeIngredient(index: number) {
        if (this.ingredients.length > 1) {
            this.ingredients.removeAt(index);
        }
    }

    addDescription() {
        this.descriptions.push(this.formbuilder.control(''));
    }

    removeDescription(index: number) {
        if (this.descriptions.length > 1) {
            this.descriptions.removeAt(index);
        }
    }

    submitRecipe(): void {

        const recipeData = this.recipeForm.value;
        const descriptionString: string = this.descriptions.value.join(', ');
        const ingredientsString: string = this.ingredients.value
            .map((ingredient: any) => `${ingredient.quantity} ${ingredient.unit} of ${ingredient.ingredient}`)
            .join(', ');

        const recipe: Recipe = {
            id: this.id,
            image: null,
            name: recipeData.name,
            description: descriptionString,
            difficulty: recipeData.difficulty,
            time: recipeData.time,
            date: new Date().toISOString(),
            client: {
                id: 3
            },
            ingredients: ingredientsString,
            comments: [],
        };

        this.recipeService.updateRecipe(recipe).subscribe(
            (response) => {
                console.log('Recipe added successfully:', response);
                this.messageService.showSuccessMessage('Recipe updated successfully !');
                setTimeout(() => {
                    window.location.href = '/recipe/' + this.id;
                }, 2000);
            },
            (error) => {
                console.error('An error occurred while submitting recipe:', error);
            }
        );
    }
}


