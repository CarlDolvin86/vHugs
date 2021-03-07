import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecurityComponent } from './insecurity.component';

describe('InsecurityComponent', () => {
  let component: InsecurityComponent;
  let fixture: ComponentFixture<InsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
