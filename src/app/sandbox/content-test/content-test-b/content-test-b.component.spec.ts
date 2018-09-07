import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTestBComponent } from './content-test-b.component';

describe('ContentTestBComponent', () => {
  let component: ContentTestBComponent;
  let fixture: ComponentFixture<ContentTestBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTestBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTestBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
