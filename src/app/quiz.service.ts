import { Injectable } from '@angular/core';
import { QUIZZES } from './data/quizzes';
import { Quiz } from './models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  loadQuizzes(): Quiz[] {
    return QUIZZES;
  }

  loadQuiz(quizId: number): Quiz {
    return QUIZZES.find((quiz: Quiz) => quiz.id == quizId);
  }

}
