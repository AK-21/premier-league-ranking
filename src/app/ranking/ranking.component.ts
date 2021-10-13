import { Component, OnInit } from '@angular/core';

import { RankingInfo, RankingService } from './ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private rankingService:RankingService) { }

  info:any;
  
  order="ASC";
  tempSwitchLabel() {
    if(this.info != undefined)
    this.info.revertTeamsOrder();

    if(this.order==="ASC")
      this.order="DESC";
    else
      this.order="ASC";
  }

  ngOnInit(): void {
    this.rankingService.getFullInfo().subscribe(x=>{
          this.info = new RankingInfo(x);
    });
  }

}
