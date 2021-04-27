import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from '../videogame';

@Component({
  selector: 'app-videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.css']
})
export class VideogameDetailComponent implements OnInit {
  @Input() videogame?: Videogame;
  
  constructor() { }

  ngOnInit(): void {
  }

}
