import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../services/recipeService";
import {MessageService} from "../../services/messageService";

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
    recipeForm: FormGroup;
    ingredients: FormArray;
    descriptions: FormArray;

    constructor(private formbuilder: FormBuilder, private recipeService: RecipeService, private messageService: MessageService) {
        this.ingredients = this.formbuilder.array([]);
        this.descriptions = this.formbuilder.array([]);
        this.recipeForm = this.formbuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            ingredients: this.ingredients,
            descriptions: this.descriptions,
        });
    }


    ngOnInit(): void {
        this.recipeForm = this.formbuilder.group({
            name: ['', Validators.required],
            descriptions: this.formbuilder.array([]),
            difficulty: ['', Validators.required],
            time: ['', [Validators.required, Validators.min(1)]],
            ingredients: this.formbuilder.array([])
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

        this.recipeService.createRecipe(recipe).subscribe(
            (response) => {
                console.log('Recipe added successfully:', response);
                this.messageService.showSuccessMessage('Recipe added successfully');
                setTimeout(() => {
                    window.location.href = '/';
                }, 3000);
            },
            (error) => {
                console.error('An error occurred while submitting recipe:', error);
                this.messageService.showErrorMessage('An error occurred while submitting recipe');
            }
        );

    }
}
