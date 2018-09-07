import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTestAComponent } from './content-test-a.component';

describe('ContentTestAComponent', () => {
  let component: ContentTestAComponent;
  let fixture: ComponentFixture<ContentTestAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTestAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTestAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
