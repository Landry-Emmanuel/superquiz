import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../models';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styles: [
  ]
})
export class QuizItemComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor() { }

  ngOnInit(): void {
  }

}
