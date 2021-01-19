import { Component, OnInit } from '@angular/core';

import { Question, Answer, Choice } from '../models';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})
export class QuizQuestionComponent implements OnInit {
  // Question en cours
  question = new Question({
    id: 12,
    title: 'En quelle année AngularJS (première version) est-il sorti ?',
    choices: [
      { text: '2008'},
      { text: '2009', isCorrect: true },
      { text: '2012'},
      { text: '2014'}
    ],
    explanation: 'La version de 2009 est celle développé initialement par Miško Hevery, qui ne travaillait pas encore chez Google.'
  });

  // Réponse en cours (réponse "vierge" pour l'instant)
  answer = new Answer({ questionId: 12 });

  submitLabel = "Soumettre";
  submitClass = "btn-primary";
  submited: boolean;

  currentQuestion: Question;
  currentAnswer: Answer;

  constructor() { }

  ngOnInit(): void {
    this.currentQuestion = this.question;
    this.currentAnswer = this.answer;

    this.submited = this.currentAnswer.isAnswered();
  }

  refreshSubmitButton() {
    if(!this.submited) {
      this.submitLabel = "Soumettre";
      this.submitClass = "btn-primary";

    } else {
      if(this.currentAnswer.isCorrect) {
        this.submitLabel = "CORRECT";
        this.submitClass = "btn-success";
      } else {
        this.submitLabel = "INCORRECT";
        this.submitClass = "btn-danger";
      }
    }
  }

  // selectionne un choix
  clickChoice(choice: Choice) {
    if(!this.submited) {
      this.currentAnswer.hasChoice(choice) ? 
        this.currentAnswer.removeChoice(choice) :
        this.currentAnswer.addChoice(choice);
    }
  }

  submit() {
    this.submited = this.currentAnswer.isAnswered();

    this.refreshSubmitButton();
  }

  gotoPreviousQuestionTEMP() {
    this.currentQuestion = new Question({
      id: 12,
      title: 'En quelle année AngularJS (première version) est-il sorti ?',
      choices: [
        { text: '2008'},
        { text: '2009', isCorrect: true },
        { text: '2012'},
        { text: '2014'}
      ],
      explanation: 'La version de 2009 est celle développé initialement par Miško Hevery, qui ne travaillait pas encore chez Google.'
    });  
    this.currentAnswer = new Answer({ questionId: 12 });

    this.refreshSubmitButton();
  }

  // Charge une nouvelle question et une nouvelle réponse.
  gotoNextQuestionTEMP(): void {
    this.submited = false;
    this.refreshSubmitButton();

    this.currentQuestion = new Question({
      id: 35,
      title: 'Angular est vraiment trop canon.',
      choices: [
        { text: 'Vrai', isCorrect: true },
        { text: 'Faux'}
      ],
      explanation: 'À ce stade, comment ne pas en être persuadé ? 😝'
    });
    this.currentAnswer = new Answer({
      questionId: 35,
      multipleChoicesAllowed: false
    });
  }
}
