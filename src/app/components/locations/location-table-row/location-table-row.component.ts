import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationDetails } from 'src/app/services/api/api.type';

export interface RowClickPayload {
  id: number;
  name: string;
}

@Component({
  selector: 'app-location-table-row',
  templateUrl: './location-table-row.component.html',
  styleUrls: ['./location-table-row.component.css'],
})
export class LocationTableRowComponent {
  @Input('location') location!: LocationDetails;
  @Output('row-click') rowClick = new EventEmitter<RowClickPayload>();

  getIdByLink(link: string): string {
    const segmentArray: string[] = link.split('/');
    return segmentArray[segmentArray.length - 1];
  }

  // rowClicked() {
  //   this.rowClick.emit({
  //     name: this.location.name,
  //     id: this.location.id,
  //   });
  // }
}
