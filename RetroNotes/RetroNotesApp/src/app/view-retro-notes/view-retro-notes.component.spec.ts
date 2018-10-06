import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRetroNotesComponent } from './view-retro-notes.component';

describe('ViewRetroNotesComponent', () => {
  let component: ViewRetroNotesComponent;
  let fixture: ComponentFixture<ViewRetroNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRetroNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRetroNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
