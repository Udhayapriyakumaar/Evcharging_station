import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../Component/header/header.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{GoogleMapsModule} from '@angular/google-maps'

@Component({
  selector: 'app-stations-details',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, RouterLink, GoogleMapsModule],
  templateUrl: './stations-details.component.html',
  styleUrls: ['./stations-details.component.css']
})
export class StationsDetailsComponent implements OnInit {
  activeTab: string = 'location';
  stationId: string | null = null;
  stationDetails: any = null;
  zoom:number=15;
  mapCenter: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  apiUrl = 'http://localhost:8090/api/v1/charging_stations';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Get station ID from URL
    this.stationId = this.route.snapshot.paramMap.get('id');
    if (this.stationId) {
      this.fetchStationDetails();
      
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  fetchStationDetails() {
    this.http.get(`${this.apiUrl}/${this.stationId}`).subscribe(
      (response) => {
        this.stationDetails = response;
        if (this.stationDetails.latitude && this.stationDetails.longitude) {
          this.mapCenter = {
            lat: this.stationDetails.latitude,
            lng: this.stationDetails.longitude
          };
        }
      },
      (error) => {
        console.error('Error fetching station details:', error);
      }
    );
  }
  getDirections() {
    if (this.stationDetails.latitude && this.stationDetails.longitude) {
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${this.stationDetails.latitude},${this.stationDetails.longitude}`;
      window.open(directionsUrl, '_blank');
    } else {
      console.error('No latitude/longitude available for directions');
    }
  }
}
