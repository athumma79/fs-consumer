import { Component } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {

  public properties: Array<Property> = new Array();

  constructor(
    private propertyService: PropertyService,
    private navCtrl: NavController) {
    this.propertyService.getAllProperties((res) => {
      this.properties = res;
    });
  }

  details(id: number) {
    this.navCtrl.navigateForward("main/tabs/explore/details", {queryParams: {propId: id}});
  }

}
