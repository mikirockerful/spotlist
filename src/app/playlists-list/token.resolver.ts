import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class TokenResolver implements Resolve<string> {
    constructor (private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
        const storedToken = localStorage.getItem(AuthService.TOKEN_LOCAL_STORAGE_KEY);
        if (storedToken) {
            return storedToken;
        }

        if (!route.fragment) {
            this.router.navigate(['login']);
        }
        const accessToken = new URLSearchParams(route.fragment!).get('access_token');
        if (!accessToken) {
            this.router.navigate(['login']);
        }

        localStorage.setItem(AuthService.TOKEN_LOCAL_STORAGE_KEY, accessToken!)

        return accessToken!;
    }
}