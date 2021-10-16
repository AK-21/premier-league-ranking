import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class RankingInfo {

  static empty(): RankingInfo {
    return new RankingInfo();
  }

 constructor(jsonSource: any = null) {
    if(jsonSource == null) {
      this._name = "";
      this._season = "";
      this._teams = Array<any>();
    } else {
      const STAT_POINTS: number = 6;
      const STAT_RANK: number = 8;
      const STAT_WINS: number = 1;
      const STAT_LOSSES: number = 2;
      const STAT_DRAWS: number = 3;
      const STAT_GOALS_FOR: number = 4;
      const STAT_GOALS_AGAINST: number = 5;
      const STAT_GOAL_DIFFERENCE: number = 9;

      this._name = jsonSource.data.name;
      this._season = jsonSource.data.seasonDisplay;
      this._teams = Array<any>();

      let standings: Array<any> = jsonSource.data.standings;

      standings.forEach(standing => {

        let team: any = standing.team;
        let stats: Array<any> = standing.stats;

        this._teams.push(new Team(
            team.name,
            team.abbreviation,
            team.logos[0].href,
            stats[STAT_RANK].value,
            stats[STAT_POINTS].value,
            stats[STAT_WINS].value,
            stats[STAT_LOSSES].value,
            stats[STAT_DRAWS].value,
            stats[STAT_GOALS_FOR].value,
            stats[STAT_GOALS_AGAINST].value,
            stats[STAT_GOAL_DIFFERENCE].value
          ))
      });
    }
  }

  private _name: string;
  private _season: string;
  private _teams: Array<Team>

  private compareNumbers(a: number, b: number): number {
    return a-b;
  }

  get teams() {
    return this._teams;
  }

  getHeader(): string {
    return this._name + " " + this._season;
  }

  sortTeamsByName(): void {
    this._teams.sort((a:Team, b:Team)=>a.name.localeCompare(b.name));
  }

  sortTeamsByNameDESC(): void {
    this._teams.sort((a:Team, b:Team)=>b.name.localeCompare(a.name));
  }

  sortTeamsByPoints():void {
    this._teams.sort((a:Team, b:Team)=>this.compareNumbers(a.points, b.points));
  }

  sortTeamsByPointsDESC():void {
    this._teams.sort((a:Team, b:Team)=>this.compareNumbers(b.points, a.points));
  }
}

class Team {
  constructor(
    private _name: string,
    private _abbreviation: string,
    private _logo: string,
    private _position: number,
    private _points: number,
    private _wins: number,
    private _losses: number,
    private _draws: number,
    private _goalsFor: number,
    private _goalsAgainst: number,
    private _goalDifference: number
    ){ }

  get name():string {
    return this._name;
  }

  get abbreviation():string {
    return this._abbreviation;
  }

  get logo():string {
    return this._logo;
  }

  get position():number {
    return this._position;
  }

  get points():number {
    return this._points;
  }

  get wins():number {
    return this._wins;
  }

  get losses():number {
    return this._losses;
  }

  get draws():number {
    return this._draws;
  }

  get goalsFor():number {
    return this._goalsFor;
  }

  get goalsAgainst():number {
    return this._goalsAgainst;
  }

  get goalDifference():number {
    return this._goalDifference;
  }
}

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) {

  }

  getFullInfo() :Observable<any> {
    return this.http.get<any>('./api/?season=2021&sort=asc');
  }
}
