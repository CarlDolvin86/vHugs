import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagPostComponent } from './hashtag-post.component';

describe('HashtagPostComponent', () => {
  let component: HashtagPostComponent;
  let fixture: ComponentFixture<HashtagPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
