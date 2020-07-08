import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTelecanalsComponent } from './tab-telecanals.component';

describe('TabTelecanalsComponent', () => {
  let component: TabTelecanalsComponent;
  let fixture: ComponentFixture<TabTelecanalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTelecanalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTelecanalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
