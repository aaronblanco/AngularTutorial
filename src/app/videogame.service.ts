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
    this.messageService.add('VideogameService: fetched videogames');
    return videogames;
  }
  getVideogame(id: number): Observable<Videogame> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const games = VIDEOGAMES.find(h => h.id === id) as Videogame;
    this.messageService.add(`VideogameService: fetched videogame id=${id}`);
    return of(games);
  }

}
