import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Playlist } from "../playlist.model";



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
                }
            });
        }));
    }
}
