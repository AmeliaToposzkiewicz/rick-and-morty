import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { LocationDetails } from 'src/app/services/api/api.type';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
})
export class LocationDetailsComponent {
  locationId: number;
  locationDetails!: LocationDetails;

  constructor(private router: ActivatedRoute, private apiService: ApiService) {
    this.locationId = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getLocationById(this.locationId);
  }

  getLocationById(id: number) {
    this.apiService.getLocation(id).subscribe((data) => {
      this.locationDetails = data;
    });
  }
  getIdByLink(link: string): string {
    const segmentArray: string[] = link.split('/');
    return segmentArray[segmentArray.length - 1];
  }
}
