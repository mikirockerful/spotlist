import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Playlist } from '../playlist.model';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.scss']
})
export class PlaylistsListComponent implements OnInit {

  constructor(private playlistsService: PlaylistsService, private route: ActivatedRoute) { }
  playlistsSubscription: Subscription | undefined;
  playlists: Playlist[] = [];
  accessToken: string = 'test';
  selectedPlaylist: Playlist | undefined;

  ngOnInit(): void {
      this.accessToken = this.route.snapshot.data['accessToken'];
      this.playlistsSubscription = this.playlistsService.getPlaylists(this.accessToken).subscribe(playlists => {
        this.playlists = playlists;
      });
  }

  onPlaylistSelected(playlist: Playlist) {
    this.selectedPlaylist = playlist;
  }

}
