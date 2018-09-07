import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTestInnerComponent } from './content-test-inner.component';

describe('ContentTestInnerComponent', () => {
  let component: ContentTestInnerComponent;
  let fixture: ComponentFixture<ContentTestInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTestInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTestInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
