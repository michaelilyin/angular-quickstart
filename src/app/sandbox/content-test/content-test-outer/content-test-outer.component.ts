import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { ContentTestAComponent } from '../content-test-a/content-test-a.component';
import { ContentTestBComponent } from '../content-test-b/content-test-b.component';

@Component({
  selector: 'app-content-test-outer',
  templateUrl: './content-test-outer.component.html',
  styleUrls: ['./content-test-outer.component.scss']
})
export class ContentTestOuterComponent implements OnInit {

  @ContentChild(ContentTestAComponent) a;
  @ContentChild(ContentTestBComponent) b;

  @ViewChild(ContentTestAComponent) av;
  @ViewChild(ContentTestBComponent) bv;

  constructor() { }

  ngOnInit() {
  }

}
