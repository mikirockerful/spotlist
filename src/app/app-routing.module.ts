import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlaylistsListComponent } from './playlists-list/playlists-list.component';
import { TokenResolver } from './playlists-list/token.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'playlists', component: PlaylistsListComponent, resolve: { accessToken: TokenResolver } },
  { path: '',   redirectTo: '/playlists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
