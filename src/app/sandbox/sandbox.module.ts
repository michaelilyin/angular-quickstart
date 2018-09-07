import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTestComponent } from './content-test/content-test.component';
import { ContentTestInnerComponent } from './content-test/content-test-inner/content-test-inner.component';
import { ContentTestAComponent } from './content-test/content-test-a/content-test-a.component';
import { ContentTestBComponent } from './content-test/content-test-b/content-test-b.component';
import { ContentTestOuterComponent } from './content-test/content-test-outer/content-test-outer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentTestComponent,
    ContentTestInnerComponent,
    ContentTestAComponent,
    ContentTestBComponent,
    ContentTestOuterComponent
  ],
  exports: [
    ContentTestComponent
  ]
})
export class SandboxModule { }
