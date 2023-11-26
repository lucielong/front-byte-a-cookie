import {Component, Input} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";

type ImageMapping = { [key: string]: string };

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule, CommonModule],
})
export class CardComponent {
    @Input() recipe: Recipe;
    defaultImage: string = '../../assets/recipePictures/default.png';

    constructor() {
        this.recipe = {} as Recipe;
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
        };
        return imageMapping.hasOwnProperty(recipeName) ? imageMapping[recipeName] : '';
    }
    setDefaultImage(event: any): void {
       event.target.src = this.defaultImage;
    }
}

