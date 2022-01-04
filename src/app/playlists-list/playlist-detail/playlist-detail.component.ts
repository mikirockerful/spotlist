import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/playlist.model';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {
  @Input() playlist!: Playlist;

  constructor() { }

  ngOnInit(): void {
  }

}
