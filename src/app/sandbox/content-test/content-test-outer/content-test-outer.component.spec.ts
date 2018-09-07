import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTestOuterComponent } from './content-test-outer.component';

describe('ContentTestOuterComponent', () => {
  let component: ContentTestOuterComponent;
  let fixture: ComponentFixture<ContentTestOuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTestOuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTestOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
