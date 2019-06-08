import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    public navCtrl: NavController,
    public alertController: AlertController
  ) { }

  register(user: User) {
    this.httpClient.post("http://localhost:3000/users", user).subscribe(
      (response: User) => {
        localStorage.setItem("userId", response.id.toString(10));
        this.navCtrl.navigateForward("main/tabs/explore");
      },
      async (err) => {
        const alert = await this.alertController.create({
          message: err.error.message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  login(user: User) {
    this.httpClient.post("http://localhost:3000/users/authentication", user).subscribe(
      (response: User) => {
        localStorage.setItem("userId", response.id.toString(10));
        this.navCtrl.navigateForward("main/tabs/explore");
      },
      async (err) => {
        const alert = await this.alertController.create({
          message: err.error.message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  getUserById(id: number, assign: Function) {
    this.httpClient.get("http://localhost:3000/users/" + id).subscribe((response: User) => {
      assign(response);
    });
  }

}
