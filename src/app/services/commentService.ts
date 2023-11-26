import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/comment.model";

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    private baseUrl = 'http://localhost:8080/comments';

    constructor(private http: HttpClient) {
    }

    createComment(comment: Comment): Observable<Comment | null> {
        return this.http.post<Comment>(this.baseUrl, comment);
    }

    listCommentsByRecipe(recipeId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.baseUrl}/byRecipe/${recipeId}`);
    }

    rateAverage(recipeId: number | undefined): Observable<number> {
        return this.http.get<number>(`${this.baseUrl}/ratingAverage/${recipeId}`);
    }
}
