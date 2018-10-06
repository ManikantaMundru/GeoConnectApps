import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRetoNotesSearchComponent } from './view-reto-notes-search.component';

describe('ViewRetoNotesSearchComponent', () => {
  let component: ViewRetoNotesSearchComponent;
  let fixture: ComponentFixture<ViewRetoNotesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRetoNotesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRetoNotesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
