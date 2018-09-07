import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionInfoDialogComponent } from './version-info.component';

describe('VersionInfoDialogComponent', () => {
  let component: VersionInfoDialogComponent;
  let fixture: ComponentFixture<VersionInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
