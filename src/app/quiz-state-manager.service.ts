/**
 * @file
 * Service to manage the quiz state (i.e. current quiz, current question, etc.)
 */
import { Injectable } from '@angular/core';

// Models
import { Quiz, Question, Answer, AnswersState } from './models';

/**
 * A question/answer pair.
 */
interface QA {
  question: Question;
  answer: Answer;
}

@Injectable({
  providedIn: 'root'
})
export class QuizStateManager {
  private _currentQuiz!: Quiz;
  private _currentQuestionIndex!: number;
  private _allAnswers!: AnswersState;

  /**
   * Public API.
   */

  /**
   * Set the current quiz.
   */
  setQuiz(quiz: Quiz): void {
    this._currentQuiz = quiz;
    this._currentQuestionIndex = -1;
    this._allAnswers = {};
  }

  /**
   * Return the first question & answer in the quiz.
   */
  getFirstQA(): QA {
    this._currentQuestionIndex = 0;
    const q = this._currentQuiz.questions[this._currentQuestionIndex];
    return { question: q, answer: this.getAnswer(q.id) };
  }

  /**
   * Return the question & answer BEFORE the current ones.
   */
  getPreviousQA(): QA {
    this._currentQuestionIndex--;
    const q = this._currentQuiz.questions[this._currentQuestionIndex];
    return { question: q, answer: this.getAnswer(q.id) };
  }

  /**
   * Return the question & answer AFTER the current ones.
   */
  getNextQA(): QA {
    this._currentQuestionIndex++;
    const q = this._currentQuiz.questions[this._currentQuestionIndex];
    return { question: q, answer: this.getAnswer(q.id) };
  }

  /**
   * Memorize an answer.
   */
  saveAnswer(answer: Answer): void {
    this._allAnswers[answer.questionId] = answer;
  }

  /**
   * Return all answers saved so far (useful to compute the score).
   */
  getAllAnswers(): AnswersState {
    return this._allAnswers;
  }

  /**
   * Private API.
   */

  /**
   * Return the answered saved for the given question,
   * or a new answer if the question doesn't have an answer yet.
   */
  private getAnswer(questionId: number): Answer {
    return this._allAnswers[questionId] || new Answer({ questionId });
  }

}
