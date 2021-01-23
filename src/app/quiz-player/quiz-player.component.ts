import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Answer, AnswersState, Question, Quiz } from '../models';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: [
  ]
})
export class QuizPlayerComponent implements OnInit {
  // PROPRIÉTÉS AVEC FAUSSES DONNÉES À UTILISER POUR L'INSTANT
  index = 0;
  currentQuiz: Quiz;  // quiz en cours
  currentQuestion: Question;  // question en cours
  currentAnswer: Answer;  // réponse en cours
  currentAnswers: AnswersState = {};  // toutes les réponses récoltées pour le quiz en cours

  quizStarted = false;

  constructor(private _quizService: QuizService) { }

  ngOnInit(): void {
    this.currentQuiz = this._quizService.loadQuiz(32);
    this.currentQuestion = this.currentQuiz.questions[0];
    this.currentAnswer = new Answer({ questionId: this.currentQuestion.id });
  }

  previousQuiz(event?) {
    this.index = (this.index > 0) ? this.index - 1 : 0;

    this.currentQuiz = QUIZZES[this.index];
    this.currentQuestion = this.currentQuiz.questions[this.index];  // question en cours
    // this.currentAnswer = new Answer({ questionId: this.currentQuestion.id });  // réponse en cours

  }

  nextQuiz(event?) {
    this.currentQuiz = QUIZZES[this.index];
    this.currentQuestion = this.currentQuiz.questions[this.index + 1];  // question en cours
    // this.currentAnswer = new Answer({ questionId: this.currentQuestion.id });  // réponse en cours
  }

  saveQuiz(event?) {
    alert('Quiz sauvegardé !');
  }

  receivedAnswer(answer: Answer) {
    // Notez que this.currentAnswers est un objet, pas un tableau !
    this.currentAnswers[answer.questionId] = answer;

    alert('Réponse Soumise avec succès ! => ' + answer);
  }



}
