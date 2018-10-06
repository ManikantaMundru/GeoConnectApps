import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActionItemsComponent } from './view-action-items.component';

describe('ViewActionItemsComponent', () => {
  let component: ViewActionItemsComponent;
  let fixture: ComponentFixture<ViewActionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActionItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
