import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    searchTerm: string = '';
    recipes: any[] = [];

    constructor(private router: Router) {
    }

    searchRecipe(): void {
        if (this.searchTerm.trim() !== '') {
            this.router.navigate(['/search'], {queryParams: {name: this.searchTerm}});
        } else {
            console.log('Veuillez saisir un terme de recherche.');
        }
    }
}
