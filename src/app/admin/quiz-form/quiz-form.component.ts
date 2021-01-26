import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models';
import { QuizService } from 'src/app/quiz/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html'
})
export class QuizFormComponent implements OnInit {
  quizForm: FormGroup;
  quiz: Quiz = new Quiz({});

  quizInitialised = false;
  quizId: number

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private _quizService: QuizService) { }

  ngOnInit(): void {
    const quizId = Number(this.activatedRoute.snapshot.paramMap.get('quizId'));
    this.initQuizForm(quizId);
  }

  initQuizForm(quizId?: number): void {
    this.quizForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      canRetryQuestion: [false]
    });

    if(quizId) {
      this._quizService.loadQuiz(quizId).subscribe(
        quiz => {
          this.quizForm.patchValue(quiz);

          this.quiz = quiz;
          this.quizInitialised = true;
        }
      );
    } else {
      this.quizInitialised = true;
    }
  }

  saveQuizForm(): void {
    if(this.quizForm.valid) {
      this.quiz.title = this.quizForm.get('title').value;
      this.quiz.description = this.quizForm.get('description').value;
      this.quiz.canRetryQuestion = this.quizForm.get('canRetryQuestion').value;      

      // sauvegarde du quiz
      this._quizService.saveQuiz(this.quiz).subscribe(
        () => {
          // redirection
          this.router.navigate(
            ['..'],
            // chemin relatif en fonction de l'url et non des routes parentes configurees
            {relativeTo: this.activatedRoute} 
          );

          alert('Quiz sauvegardé !');
        }
      );
    }

    
  }

}
