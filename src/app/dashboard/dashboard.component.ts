import { Component, OnInit } from '@angular/core';
import { Videogame } from '../videogame';
import { VideogameService } from '../videogame.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  videogames: Videogame[] = [];

  constructor(private videogameService: VideogameService) { }

  ngOnInit() {
    this.getVideogames();
  }

  getVideogames(): void {
    this.videogameService.getVideogames().subscribe(videogames => this.videogames = videogames.slice(1, 5));
  }
}