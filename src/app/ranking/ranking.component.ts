import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankingInfo, RankingService } from './ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private rankingService:RankingService, private route: ActivatedRoute) {}

  info!:RankingInfo;
  
  order="ASC";
  tempSwitchLabel() {

    if(this.order==="ASC")
      this.order="DESC";
    else
      this.order="ASC";
  }

  ngOnInit(): void {
    this.route.data.subscribe(x=>{
      this.info = new RankingInfo(x.info);
    });
  }
}
