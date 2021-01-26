import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'quizzes', component: QuizListComponent},
  {path: 'quiz/:quizId', component: QuizPlayerComponent}
];

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
    RouterModule.forChild(routes)
  ],
  exports: [
    QuizPlayerComponent
  ]
})
export class QuizModule { }
