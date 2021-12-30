import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private clientId = 'edf39af411064754a5523d3f8a32a557';
    private redirectUri = 'http://localhost:4200';
    constructor(private httpClient: HttpClient) {}

    login() {
        return this.httpClient.get('https://accounts.spotify.com/authorize', {params: {
            client_id: this.clientId,
            response_type: 'token',
            redirect_uri: this.redirectUri,
        }})
    }
}