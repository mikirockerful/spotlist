import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Playlist } from 'src/app/playlist.model';
import { Track } from 'src/app/track.model';
import { PlaylistsService } from '../playlists.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit, OnDestroy {
  playlistTracksSubscription!: Subscription;
  tracks!: Array<Track>;
  tracks$!: Observable<Array<Track>>;
  private _playlist!: Playlist;
  editMode = true;
    
  @Input() set playlist(value: Playlist) {
     this._playlist = value;
     this.subscribeToTracks();
  }
  
  get playlist(): Playlist {
      return this._playlist;
  }

  constructor(private playlistsService: PlaylistsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.subscribeToTracks();
  }

  subscribeToTracks(): void {
    this.tracks$ = this.playlistsService.getPlaylistTracks(this.playlist.id, this.authService.getAccessToken());
    this.playlistTracksSubscription = this.tracks$.subscribe(tracks => {
      this.tracks = tracks;
    });
  }

  ngOnDestroy(): void {
    this.playlistTracksSubscription.unsubscribe();
  }

  onRemoveTrackButtonClicked(track: Track) {
    this.playlistsService.removeTrack(this.playlist.id, track.uri, this.authService.getAccessToken());
    const index = this.tracks.indexOf(track);
    this.tracks.splice(index, 1);
  }

}
