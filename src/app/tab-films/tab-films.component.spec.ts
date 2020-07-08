import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFilmsComponent } from './tab-films.component';

describe('TabFilmsComponent', () => {
  let component: TabFilmsComponent;
  let fixture: ComponentFixture<TabFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
