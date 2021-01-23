import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../../models';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styles: [
  ]
})
export class QuizItemComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  play(quizId: number) {
    this._router.navigate(['quiz', quizId]);  // => quiz/:quizId
  }

}