import {User} from "./user.model";
import {Recipe} from "./recipe.model";

export interface Comment {
    id?: number
    client: User
    recipe: Recipe
    rating: number
    body: string
    date: Date
}
