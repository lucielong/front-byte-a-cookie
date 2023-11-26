import {Recipe} from "./recipe.model";
import {Image} from "./image.model";

export interface User {
    id: number
    name?: string
    email?: string
    password?: string
    photo?: Image
    recipes?: Recipe[];
    comments?: Comment[];
}
