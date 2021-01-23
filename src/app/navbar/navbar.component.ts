import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { UserOptions } from '../models/user-options';

interface Item {
  value: string,
  path: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  logo = "/assets/logo_superquiz.png";
  userOption: UserOptions;
  user: User;
  navItems: Item[] = [
    {value: "Accueil", path: "home"},
    {value: "Quizs", path: "quizzes"},
    {value: "Admin", path: "admin"},
    {value: "Login", path: "login"}
  ];

  constructor() { }

  ngOnInit(): void {
    this.userOption = {
      name: "Emmanuel",
      email: "user@user.com"
    };

    this.user = new User(this.userOption);
  }

}
