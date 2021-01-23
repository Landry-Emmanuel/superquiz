import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../../data/quizzes';
import { Quiz } from '../../models';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styles: [
  ]
})
export class QuizListComponent implements OnInit {
  quizlist: Quiz[];

  constructor(private _quizService: QuizService) { }

  ngOnInit(): void {
    this._quizService.loadQuizzes().subscribe(
      (quizList) => {
        this.quizlist = quizList;
      }
    );
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
