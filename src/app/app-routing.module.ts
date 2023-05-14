import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersTableComponent } from './components/characters/characters-table/characters-table.component';
import { LocationTableComponent } from './components/locations/location-table/location-table.component';
import { EpisodesTableComponent } from './components/episodes/episodes-table/episodes-table.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';
import { EpisodeDetailsComponent } from './components/episodes/episode-details/episode-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },

  { path: 'characters', component: CharactersTableComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },

  { path: 'locations', component: LocationTableComponent },
  { path: 'locations/:id', component: LocationDetailsComponent },

  { path: 'episodes', component: EpisodesTableComponent },
  { path: 'episodes/:id', component: EpisodeDetailsComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
