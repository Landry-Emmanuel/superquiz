/**
 * @file
 * A user logged into the application.
 */

import { UserOptions } from "./user-options";

// Créer la classe User ici.
export class User {
  name: string;
  email: string;
  photo: string;
  active: boolean;

  constructor(options: UserOptions) {
    this.name = options.name;
    this.email = options.email;
    this.photo = options.photo || '';
    this.active = options.active ? true : options.active;
  }

}
