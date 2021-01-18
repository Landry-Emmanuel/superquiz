/**
 * Stores all the answers submitted so far by the user,
 * keyed by questionId.
 */
import { Answer } from './answer';

export interface AnswersState {
  [questionId: number]: Answer;
}
