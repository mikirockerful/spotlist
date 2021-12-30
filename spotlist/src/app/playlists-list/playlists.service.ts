import { Injectable } from "@angular/core";
import { Playlist } from "../playlist.model";


@Injectable({
    providedIn: 'root',
  })
export class PlaylistsService {
    getPlaylists(): Playlist[] {
        return [
            {id: 'list1', name: "My list", description: "Really cool list", uri: "fake_uri"},
            {id: 'list2', name: "Another list", description: "Really cool list again", uri: "fake uri 2"}
        ]
    }
}
