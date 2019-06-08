import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property.service';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public property: Property = new Property();
  public booking: Booking = new Booking();

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private bookingService: BookingService
  ) {
    this.activatedRoute.queryParamMap.subscribe((data: any) => {
      const id = data.params.propId;
      this.propertyService.getPropertyById(id, (res) => {
        this.property = res;
      });
      this.booking.propertyId = id;
    });
    this.booking.status = "NEW";
    this.booking.userId = parseInt(localStorage.getItem("userId"));
  }

  book() {
    console.log(this.booking.dateFrom);
    console.log(this.booking.dateTo);
    this.bookingService.book(this.booking);
  }

  ngOnInit() {
  }

}
