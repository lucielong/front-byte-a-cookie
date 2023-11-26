import {Difficulty} from "./difficulty.model";
import {User} from "./user.model";
import {Image} from "./image.model";

export interface Recipe {
    rating?: number;
    id?: number;
    name: string;
    image?: Image | null;
    description: string;
    difficulty?: Difficulty;
    time?: number;
    client?: User;
    date?: string;
    ingredients: string;
    comments?: Comment[];
    steps?: string[];
    listIngredients?: string[];
}
