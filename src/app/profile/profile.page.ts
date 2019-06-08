import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  public user: User = new User();

  constructor(private userService: UserService) {
    const id = parseInt(localStorage.getItem("userId"));
    this.userService.getUserById(id, (res) => {
      this.user = res;
    });
  }

}
