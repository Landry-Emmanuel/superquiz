import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QUIZZES } from '../../data/quizzes';
import { Answer, AnswersState, Question, Quiz, QuizSubmission } from '../../models';
import { QuizStateManager } from '../quiz-state-manager.service';
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

  constructor(private _quizService: QuizService,
              private _quizStateManagerService: QuizStateManager,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.paramMap;

    this._quizService.loadQuiz(Number(params.get('quizId'))).subscribe(
      (quiz) => {
        this.currentQuiz = quiz;
        this._quizStateManagerService.setQuiz(this.currentQuiz);
      }
    );

    
  }

  startQuiz() {
    this.quizStarted = true;

    const {question, answer} = this._quizStateManagerService.getFirstQA();
    this.currentQuestion = question;
    this.currentAnswer = answer;
  }

  previousQuiz(event?) {
    const {question, answer} = this._quizStateManagerService.getPreviousQA();
    this.currentQuestion = question;
    this.currentAnswer = answer;
  }

  nextQuiz(event?) {
    const {question, answer} = this._quizStateManagerService.getNextQA();
    this.currentQuestion = question;
    this.currentAnswer = answer;
  }

  saveQuiz(event?: QuizSubmission) {
    // const answer = new Answer(event.answers);
    // this._quizStateManagerService.saveAnswer();

    alert('Quiz sauvegardé !');
  }

  receivedAnswer(answer: Answer) {
    // Notez que this.currentAnswers est un objet, pas un tableau !
    this.currentAnswers[answer.questionId] = answer;
    this._quizStateManagerService.saveAnswer(answer);
    this.currentAnswers = this._quizStateManagerService.getAllAnswers();
  }

}
