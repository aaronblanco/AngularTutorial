import { Component, OnInit } from '@angular/core';
import { Videogame } from '../videogame';
//import { VIDEOGAMES } from '../mock-videogame';
import { VideogameService } from '../videogame.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})
export class VideogameComponent implements OnInit {
  videogames: Videogame[];
 

  constructor(private videogameService: VideogameService) { 
    this.videogames = [];
  }


    
  ngOnInit() {
    this.getVideogames();
  }


  getVideogames(): void {
    this.videogameService.getVideogames().subscribe(videogames => this.videogames = videogames);
  }

}

