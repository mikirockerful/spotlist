import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private clientId = 'edf39af411064754a5523d3f8a32a557';
    private redirectUri = 'http://localhost:4200/playlists';
    private scope = 'playlist-read-private';

    login() {
        document.location.href =`https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${this.redirectUri}&scope=${this.scope}`;
    }
}