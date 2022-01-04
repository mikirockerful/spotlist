import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class TokenResolver implements Resolve<string> {
    constructor (private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
        if (!route.fragment) {
            this.router.navigate(['login']);
        }
        const accessToken = new URLSearchParams(route.fragment!).get('access_token');
        if (!accessToken) {
            this.router.navigate(['login']);
        }
        return accessToken!;
    }
}