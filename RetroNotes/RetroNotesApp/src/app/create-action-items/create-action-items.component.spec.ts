import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActionItemsComponent } from './create-action-items.component';

describe('CreateActionItemsComponent', () => {
  let component: CreateActionItemsComponent;
  let fixture: ComponentFixture<CreateActionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateActionItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateActionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
