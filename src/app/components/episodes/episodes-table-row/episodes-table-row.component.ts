import { Component, Input } from '@angular/core';
import { EpisodeDetails } from 'src/app/services/api/api.type';

@Component({
  selector: 'app-episodes-table-row',
  templateUrl: './episodes-table-row.component.html',
  styleUrls: ['./episodes-table-row.component.css'],
})
export class EpisodesTableRowComponent {
  @Input('episode') episode!: EpisodeDetails;

  getIdByLink(link: string): string {
    const segmentArray: string[] = link.split('/');
    return segmentArray[segmentArray.length - 1];
  }
}
