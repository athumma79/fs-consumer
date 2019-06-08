import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = new User();

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.user);
  }

  ngOnInit() {
  }

}
