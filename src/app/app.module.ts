import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsListComponent } from './playlists-list/playlists-list.component';
import { LoginComponent } from './login/login.component';
import { PlaylistDetailComponent } from './playlists-list/playlist-detail/playlist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsListComponent,
    LoginComponent,
    PlaylistDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
