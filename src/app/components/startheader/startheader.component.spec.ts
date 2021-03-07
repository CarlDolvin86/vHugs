import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartheaderComponent } from './startheader.component';

describe('StartheaderComponent', () => {
  let component: StartheaderComponent;
  let fixture: ComponentFixture<StartheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
