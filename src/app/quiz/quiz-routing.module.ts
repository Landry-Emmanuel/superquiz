import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';

const routes: Routes = [
  {path: 'quizzes', component: QuizListComponent},
  {path: 'quiz/:quizId', component: QuizPlayerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
