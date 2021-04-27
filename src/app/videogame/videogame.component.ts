import { Component, OnInit } from '@angular/core';
import { Videogame } from '../videogame';
import { VIDEOGAMES } from '../mock-videogame';
@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})
export class VideogameComponent implements OnInit {
  videogames = VIDEOGAMES;
  selectedVideogame?: Videogame;

  constructor() { }

  ngOnInit() {
  }

  onSelect(videogame: Videogame): void {
    this.selectedVideogame = videogame;
  }
}

