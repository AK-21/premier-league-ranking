import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RankingComponent} from './ranking.component';
import {RankingResolverService} from './ranking-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: RankingComponent,
    resolve: {
      info: RankingResolverService
    }
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
