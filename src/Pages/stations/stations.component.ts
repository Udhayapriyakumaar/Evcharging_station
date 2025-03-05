import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../Component/header/header.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, HeaderComponent],
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  latitude: number | undefined;
  longitude: number | undefined;
  errorMessage: string | undefined;
  apiUrl = 'http://localhost:8090/api/v1/charging_stations/nearest';
  chargingStations: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
          this.getNearestStations();
        },
        (error) => {
          this.errorMessage = `Error getting location: ${error.message}`;
          console.error(this.errorMessage);
        }
      );
    } else {
      this.errorMessage = 'Geolocation is not supported by this browser.';
      console.error(this.errorMessage);
    }
  }

  getNearestStations() {
    if (this.latitude && this.longitude) {
      const url = `${this.apiUrl}?latitude=${this.latitude}&longitude=${this.longitude}`;

      this.http.get(url).subscribe(
        (response: any) => {
          console.log('Nearest charging stations:', response);
          this.chargingStations = response; // Assuming API returns an array
        },
        (error) => {
          console.error('Error fetching charging stations:', error);
          this.errorMessage = 'Failed to load charging stations.';
        }
      );
    }
  }
}
