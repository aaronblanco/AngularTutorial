import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from '../videogame';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { VideogameService } from '../videogame.service';

@Component({
  selector: 'app-videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.css']
})
export class VideogameDetailComponent implements OnInit {
/*@Input() videogame?: Videogame; 
videogame: Videogame;*/
 @Input() videogame?: Videogame; 
  
 
  constructor(
    private route: ActivatedRoute,
    private videogameService: VideogameService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getVideogame();
  }

  goBack(): void {
    this.location.back();
  }
    
  getVideogame(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.videogameService.getVideogame(id)
    .subscribe(videogame => {this.videogame = videogame});
      
  }
}
