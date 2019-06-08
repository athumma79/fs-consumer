import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public user: User = new User();

  constructor(private userService: UserService) { }

  register() {
    this.userService.register(this.user);
  }

  ngOnInit() {
  }

}
