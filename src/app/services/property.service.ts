import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) {}

  getAllProperties(assign: Function) {
    this.httpClient.get('http://localhost:3000/properties').subscribe((response: Array<Property>) => {
      assign(response);
    });
  }

  getPropertyById(id: number, assign: Function) {
    this.httpClient.get("http://localhost:3000/properties/" + id).subscribe((response: Property) => {
      assign(response);
    });
  }

}
