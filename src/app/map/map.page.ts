import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  reciveCoordinates: string='';

  constructor(private router: Router) {}

  ngOnInit() {}
  
  printCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const latitude = coordinates.coords.latitude;
      const longitude = coordinates.coords.longitude;

      this.reciveCoordinates = `Sus coordenadas son: Latitude: ${latitude}, \nLongitude: ${longitude}`;

      console.log('Current position:', coordinates);
    } catch (error) {
      console.error('Error getting position:', error);
    }
  };

  back(){    this.router.navigate(['./home'], {
    queryParams: {
      direction: this.reciveCoordinates,
      },
    });
  };
  limpiar(){ this.reciveCoordinates = '';}
}
