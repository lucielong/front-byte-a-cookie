import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../services/recipeService";
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../models/comment.model";
import {CommentService} from "../../services/commentService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../../services/messageService";

type ImageMapping = { [key: string]: string };

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
    recipe: Recipe;
    id: number;
    comments: Comment[];
    commentForm: FormGroup;
    defaultImage: string = '../../assets/recipePictures/default.png';

    constructor(private router: Router, private formBuilder: FormBuilder, private recipeService: RecipeService, private route: ActivatedRoute, private commentService: CommentService, private messageService: MessageService) {
        this.recipe = {} as Recipe;
        this.id = 0;
        this.comments = [];
        this.commentForm = this.formBuilder.group({
            rating: ['', Validators.required, Validators.min(0)],
            body: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.recipeService.getRecipe(this.id).subscribe((data: Recipe) => {
                this.recipe = data;
                this.recipe.steps = this.recipe.description.split('\,');
                this.recipe.listIngredients = this.recipe.ingredients.split('\,');

                this.commentService.rateAverage(this.id).subscribe((ratingData: number) => {
                    console.log(ratingData);
                    this.recipe.rating = ratingData;
                });
            });
        });
        this.commentService.listCommentsByRecipe(this.id).subscribe((commentsData: Comment[]) => {
            this.comments = commentsData;
        });
    }

    deleteRecipe(id: number | undefined) {
        this.recipeService.deleteRecipe(id).subscribe(() => {
            console.log("Recipe deleted");
            window.location.href = '';
        });
    }

    getImageForRecipe(recipeName: string): string {
        const imageMapping: ImageMapping = {
            'cookie': '../../assets/recipePictures/cookie.png',
            'brownie': '../../assets/recipePictures/brownie.png',
            'cinnamon Roll': '../../assets/recipePictures/cinnamonroll.png',
            'flan': '../../assets/recipePictures/flan.png',
            'macaron': '../../assets/recipePictures/macaron.png',
            'fondant': '../../assets/recipePictures/fondant.png',
            'marbré': '../../assets/recipePictures/marbre.png',
            'eclair': '../../assets/recipePictures/eclair.png',
            'madeleine': '../../assets/recipePictures/madeleine.png',
            'blondie': '../../assets/recipePictures/blondie.png',
            'financier': '../../assets/recipePictures/financier.png',
            'croissant': '../../assets/recipePictures/croissant.png',
            'donuts': '../../assets/recipePictures/donut.png',
            'chouquette': '../../assets/recipePictures/chouquette.png',
            'gaufre': '../../assets/recipePictures/gaufre.png',
            'crumble': '../../assets/recipePictures/crumble.png',
            'cheesecake': '../../assets/recipePictures/cheesecake.png',
            'tarte': '../../assets/recipePictures/tarte.png',
            'shortbread': '../../assets/recipePictures/shortbread.png',
            'brioche': '../../assets/recipePictures/brioche.png',
        }
        return imageMapping.hasOwnProperty(recipeName) ? imageMapping[recipeName] : '';
    }

    updateRecipe(id: number | undefined) {
        this.router.navigate(['/update-recipe', id]);
    }

    submitComment(): void {

        const commentData = this.commentForm.value;

        const comment: Comment = {
            client: {
                id: 3
            },
            recipe: {
                id: this.id,
                name: this.recipe.name,
                description: this.recipe.description,
                ingredients: this.recipe.ingredients,
            },
            rating: commentData.rating,
            body: commentData.body,
            date: new Date(),
        };

        this.commentService.createComment(comment).subscribe(
            (response) => {
                console.log('Comment added successfully:', response);
                this.messageService.showSuccessMessage('Comment added successfully');
                setTimeout(() => {
                    window.location.href = '/recipe/' + this.id;
                }, 2000);
            },
            (error) => {
                console.log('Error:', error);
            }
        );
    }
    setDefaultImage(event: any): void {
        event.target.src = this.defaultImage;
    }
}
