import { Injectable } from '@angular/core';
import { Videogame } from './videogame';
import { VIDEOGAMES } from './mock-videogame';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor(private messageService: MessageService) { }

  getVideogames(): Observable<Videogame[]> {
    const videogames = of(VIDEOGAMES);
    this.messageService.add('VideoGameService: fetched videogames');
    return videogames;
  }
}
