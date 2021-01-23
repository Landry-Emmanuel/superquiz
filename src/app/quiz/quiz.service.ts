import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QUIZZES } from '../data/quizzes';
import { Quiz } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://localhost:3004/';

  constructor(private _http: HttpClient) { }

  loadQuizzes(): Observable<Quiz[]> {
    const url = `${this.baseUrl}quizzes`;

    return this._http.get<Quiz[]>(url);
  }

  loadQuiz(quizId: number): Observable<Quiz> {
    const url = `${this.baseUrl}quizzes/${quizId}`;

    return this._http.get<Quiz>(url);
  }

  saveQuiz(quiz: Quiz) {
    // Si création d'un quiz : Requête POST sur http://localhost:3004/quizzes
    // Si modification d'un quiz existant : Requête PUT sur http://localhost:3004/quizzes/QUIZ_ID

  }

  deleteQuiz(quizId: number) {
    // Requête DELETE sur http://localhost:3004/quizzes/QUIZ_ID
  }

}
