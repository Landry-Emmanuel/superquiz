import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizRoutingModule } from './quiz-routing.module';



@NgModule({
  declarations: [
    QuizListComponent,
    QuizQuestionComponent,
    QuizItemComponent,
    QuizPlayerComponent,
    QuizNavComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ],
  exports: [
    QuizPlayerComponent
  ]
})
export class QuizModule { }
