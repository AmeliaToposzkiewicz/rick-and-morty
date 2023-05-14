import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LocationDetails } from 'src/app/services/api/api.type';
import { RowClickPayload } from '../../characters/characters-table-row/characters-table-row.component';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css'],
})
export class LocationTableComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  locationsDetails: LocationDetails[] = [];
  nextPage: string | null = null;
  prevPage: string | null = null;

  ngOnInit(): void {
    const firstPage: string = '1';
    this.getLocationsData(firstPage);
  }

  getLocationsData(pageNumber: string) {
    this.apiService.getLocations(pageNumber).subscribe((data) => {
      this.locationsDetails = data.results;

      const { next, prev } = data.info;
      this.nextPage = next ? new URL(next).searchParams.get('page') : null;
      this.prevPage = prev ? new URL(prev).searchParams.get('page') : null;
    });
  }

  onNextPage() {
    console.log('Request o następną stronę');
    if (this.nextPage) {
      this.getLocationsData(this.nextPage);
    }
  }
  onPrevPage() {
    console.log('Request o poprzednią stronę');
    if (this.prevPage) {
      this.getLocationsData(this.prevPage);
    }
  }
  onRowClick(event: RowClickPayload) {
    console.log('Wartość w rodzicu ->', event);
  }
}
