import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RankingService } from './ranking.service';

@Injectable({
    providedIn: 'root'
})

export class RankingResolverService implements Resolve<any> {
    constructor(
        private rankingService: RankingService
    ) {}

    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
        return this.rankingService.getFullInfo();
    }

}