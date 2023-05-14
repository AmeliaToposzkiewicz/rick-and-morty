import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersTableComponent } from './components/characters/characters-table/characters-table.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationTableComponent } from './components/locations/location-table/location-table.component';
import { CharactersTableRowComponent } from './components/characters/characters-table-row/characters-table-row.component';
import { LocationTableRowComponent } from './components/locations/location-table-row/location-table-row.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';
import { EpisodesTableRowComponent } from './components/episodes/episodes-table-row/episodes-table-row.component';
import { EpisodesTableComponent } from './components/episodes/episodes-table/episodes-table.component';
import { EpisodeDetailsComponent } from './components/episodes/episode-details/episode-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersTableComponent,
    LocationTableComponent,
    CharactersTableRowComponent,
    LocationTableRowComponent,
    FooterComponent,
    HeaderComponent,
    CharacterDetailsComponent,
    LocationDetailsComponent,
    EpisodesTableRowComponent,
    EpisodesTableComponent,
    EpisodeDetailsComponent,
    NavigationComponent,
    HomePageComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
