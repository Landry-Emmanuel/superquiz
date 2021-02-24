import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizStateManager } from '../quiz/quiz-state-manager.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateQuiz implements CanDeactivate<any> {

  constructor(private _qsmService: QuizStateManager) { }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this._qsmService.hasPendingChanges) {
      return confirm('Vous avez des réponses en cours. Voulez-vous poursuivre et perdre vos réponses ?');
    }
    throw new Error('Method not implemented.');
  }

}
