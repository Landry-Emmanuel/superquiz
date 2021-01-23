import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    QuizListComponent,
    QuizQuestionComponent,
    QuizItemComponent,
    QuizPlayerComponent,
    QuizNavComponent
  ],
  imports: [
    BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
