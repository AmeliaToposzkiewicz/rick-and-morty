import { Component, Input } from '@angular/core';
import { CharacterDetails } from 'src/app/services/api/api.type';

export interface RowClickPayload {
  id: number;
  name: string;
}

@Component({
  selector: 'app-characters-table-row',
  templateUrl: './characters-table-row.component.html',
  styleUrls: ['./characters-table-row.component.css'],
})
export class CharactersTableRowComponent {
  @Input('character') character!: CharacterDetails;
  // @Output('row-click') rowClick = new EventEmitter<RowClickPayload>();

  getIdByLink(link: string): string {
    const segmentArray: string[] = link.split('/');
    return segmentArray[segmentArray.length - 1];
  }
}
