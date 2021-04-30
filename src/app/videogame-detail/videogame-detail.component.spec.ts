import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameDetailComponent } from './videogame-detail.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { VideogameService } from '../videogame.service';

describe('VideogameDetailComponent', () => {
  let component: VideogameDetailComponent;
  let fixture: ComponentFixture<VideogameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
