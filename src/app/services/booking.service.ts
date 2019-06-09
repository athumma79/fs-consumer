import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private httpClient: HttpClient,
    private alertController: AlertController) {}

  book(booking: Booking) {
    this.httpClient.post("http://localhost:3000/properties/" + booking.propertyId + "/bookings", booking).subscribe(
      async (response: Booking) => {
        const alert = await this.alertController.create({
          message: "your booking has been successfully made",
          buttons: ['OK']
        });
        await alert.present();
      },
      async (err) => {
        console.log(err);
        const alert = await this.alertController.create({
          message: err.error.message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

}
