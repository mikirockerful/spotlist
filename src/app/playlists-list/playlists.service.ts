import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Playlist } from "../playlist.model";
import { Track } from "../track.model";



@Injectable({
    providedIn: 'root',
  })
export class PlaylistsService {
    constructor (private httpClient: HttpClient) {}

    getPlaylists(accessToken: string): Observable<Playlist[]> {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          })
        return this.httpClient.get('https://api.spotify.com/v1/me/playlists', { headers: headers} ).pipe(map((response: any) => {
            return response.items.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    uri: item.uri,
                    images: item.images
                }
            });
        }));
    }

    getPlaylistTracks(playlistId: string, accessToken: string): Observable<Track[]> {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          })
        return this.httpClient.get('https://api.spotify.com/v1/playlists/' + playlistId + '/tracks', { headers: headers} ).pipe(map((response: any) => {
            return response.items.map((item: any) => {
                const track = item.track;
                const artists = track.artists;
                const artistName = artists === undefined ? '-': track.artists[0].name;
                return {
                    id: track.id,
                    name: track.name,
                    uri: track.uri,
                    artistName: artistName,
                }
            });
        }));
    }

    removeTrack(playlistId: string, trackUri: string, accessToken: string): void {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          });
        const body = {tracks: [{'uri': trackUri}]};
        this.httpClient.delete('https://api.spotify.com/v1/playlists/' + playlistId + '/tracks', {headers: headers, body: body}).subscribe(res => {
            console.log(res);
        });
    }

}
