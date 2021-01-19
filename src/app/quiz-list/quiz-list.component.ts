import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Quiz } from '../models';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styles: [
  ]
})
export class QuizListComponent implements OnInit {
  quizlist: Quiz[] = QUIZZES;

  constructor() { }

  ngOnInit(): void {
  }

  deleteQuiz() {
    this.quizlist.pop();
  }

  addQuiz() {
    this.quizlist.push(
      new Quiz({
        title: "New Quiz",
        description: "New quiz added to list !"
      })
    );
  }

}
