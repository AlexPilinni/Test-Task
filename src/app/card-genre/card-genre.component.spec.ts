import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGenreComponent } from './card-genre.component';

describe('CardGenreComponent', () => {
  let component: CardGenreComponent;
  let fixture: ComponentFixture<CardGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
