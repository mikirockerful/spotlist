import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public static TOKEN_LOCAL_STORAGE_KEY = 'spotlistAccessToken';

    private clientId = 'edf39af411064754a5523d3f8a32a557';
    private redirectUri = 'http://localhost:4200/playlists';
    private scope = 'playlist-read-private playlist-modify-private';

    constructor(private router: Router) { }

    login() {
        document.location.href =`https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${this.redirectUri}&scope=${encodeURIComponent(this.scope)}`;
    }

    logout() {
        localStorage.removeItem(AuthService.TOKEN_LOCAL_STORAGE_KEY);
        this.router.navigate(['login']);
    }

    getAccessToken() {
        const token = localStorage.getItem(AuthService.TOKEN_LOCAL_STORAGE_KEY);
        if (token === null) {
            throw 'Not authenticated';
        }
        return token;
    }

}