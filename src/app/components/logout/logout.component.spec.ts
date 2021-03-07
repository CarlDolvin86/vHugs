import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOutButtonComponent } from './logout.component';

describe('AuthOutButtonComponent', () => {
  let component: AuthOutButtonComponent;
  let fixture: ComponentFixture<AuthOutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthOutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
