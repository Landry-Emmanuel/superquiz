import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { QuizItemComponent } from './quiz/quiz-item/quiz-item.component';
import { QuizPlayerComponent } from './quiz/quiz-player/quiz-player.component';
import { QuizNavComponent } from './quiz/quiz-nav/quiz-nav.component';
import { QuizModule } from './quiz/quiz.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './common/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuizModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
