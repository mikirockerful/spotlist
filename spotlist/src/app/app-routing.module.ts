import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsListComponent } from './playlists-list/playlists-list.component';
import { TokenResolver } from './playlists-list/token.resolver';

const routes: Routes = [
  { path: 'playlists', component: PlaylistsListComponent, resolve: {
    accessToken: TokenResolver
  } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
