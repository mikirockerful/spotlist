import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsListComponent } from './playlists-list/playlists-list.component';

const routes: Routes = [
  { path: 'playlists', component: PlaylistsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
