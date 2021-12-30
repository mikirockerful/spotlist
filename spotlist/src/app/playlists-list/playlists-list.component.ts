import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist.model';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.scss']
})
export class PlaylistsListComponent implements OnInit {

  constructor(private playlistsService: PlaylistsService) { }
  playlists: Playlist[] = [];

  ngOnInit(): void {
      this.playlists = this.playlistsService.getPlaylists();
  }

}
