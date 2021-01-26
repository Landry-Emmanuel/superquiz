import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { QUIZZES } from '../data/quizzes';
import { Quiz, QuizSubmission } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // baseUrl = 'http://localhost:3004/';

  constructor(private http: HttpClient,
              @Inject('JSON_SERVER_URL') private baseUrl: string) { }

  /**
   * ===========================
   * CRUD operations on QUIZZES.
   * ===========================
   */

  /**
   * Load the list of all quizzes.
   */
  loadQuizzes(): Observable<Quiz[]> {
    return this.http.get<any[]>(`${this.baseUrl}/quizzes`)
      .pipe(
        // Re-hydrate
        map(quizArray => quizArray.map(quizData => new Quiz(quizData)))
      );
  }

  /**
   * Load the given quiz ALONG WITH its questions.
   */
  loadQuiz(quizId: number): Observable<Quiz> {
    return this.http.get(`${this.baseUrl}/quizzes/${quizId}`)
      .pipe(
        map(quizData => new Quiz(quizData)),
        catchError(this.muteRequestError)
      );
  }

  /**
   * Save the given quiz (INSERT or UPDATE).
   */
  saveQuiz(quiz: Quiz): Observable<any> {
    const url = `${this.baseUrl}/quizzes` + (quiz.id ? `/${quiz.id}` : '');
    const method = quiz.id ? 'put' : 'post';
    return this.http.request(method, url, {body: quiz});
  }

  /**
   * Delete the given quiz.
   */
  deleteQuiz(quizId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/quizzes/${quizId}`);
  }

  /**
   * ===============================
   * CRUD operations on SUBMISSIONS.
   * ===============================
   */

  /**
   * Load a quiz submission.
   */
  loadQuizSubmission(submissionId: number): Observable<QuizSubmission> {
    return this.http.get(`${this.baseUrl}/submissions/${submissionId}`)
    // Re-hydrate
      .pipe(
        map((submissionData: any) => new QuizSubmission(submissionData))
      );
  }

  /**
   * Save a quiz submission.
   */
  saveQuizSubmission(submission: QuizSubmission): Observable<any> {
    return this.http.post(`${this.baseUrl}/submissions`, submission);
    // .delay(2000);  // Only to show off the spinner.
  }

  //
  //
  //

  // Catch (and rethrow).
  private muteRequestError(err: any): Observable<any> {
    const errorMsg = `${err.statusText} (${err.status})`;
    return of(null);
    // return Observable.throw(new Error(errorMsg));
  }

}
