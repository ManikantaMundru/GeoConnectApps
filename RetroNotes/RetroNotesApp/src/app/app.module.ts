import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateActionItemsComponent } from './create-action-items/create-action-items.component';
import { CreateRetroNotesComponent } from './create-retro-notes/create-retro-notes.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';
import { CreateTagsComponent } from './create-tags/create-tags.component';
import { ViewActionItemsComponent } from './view-action-items/view-action-items.component';
import { ViewRetroNotesComponent } from './view-retro-notes/view-retro-notes.component';
import { ViewRetoNotesSearchComponent } from './view-reto-notes-search/view-reto-notes-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CreateActionItemsComponent,
    CreateRetroNotesComponent,
    CreateTeamsComponent,
    CreateTagsComponent,
    ViewActionItemsComponent,
    ViewRetroNotesComponent,
    ViewRetoNotesSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
