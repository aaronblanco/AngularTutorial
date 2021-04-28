import { Component, OnInit } from '@angular/core';
import { Videogame } from '../videogame';
//import { VIDEOGAMES } from '../mock-videogame';
import { VideogameService } from '../videogame.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})
export class VideogameComponent implements OnInit {
  videogames: Videogame[] = [];
  selectedVideogame?: Videogame;

  constructor(private videogameService: VideogameService, private messageService: MessageService) { }


    
  ngOnInit() {
    this.getVideogames();
  }

  onSelect(videogame: Videogame): void {
    this.selectedVideogame = videogame;
    this.messageService.add('VideogamesComponent: Selected videogame id=${videogame.id}');
  }
  getVideogames(): void {
    this.videogameService.getVideogames().
    subscribe(videogames => this.videogames = videogames);
  }

}

