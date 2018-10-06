import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRetroNotesComponent } from './create-retro-notes.component';

describe('CreateRetroNotesComponent', () => {
  let component: CreateRetroNotesComponent;
  let fixture: ComponentFixture<CreateRetroNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRetroNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRetroNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
