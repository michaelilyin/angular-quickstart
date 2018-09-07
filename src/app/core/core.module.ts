import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { LandingComponent } from '@app/core/landing/landing.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { i18nProvider } from '@app/shared/i18n/i18n.config';
import i18n from './core.i18n';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    LandingComponent,
    BreadcrumbsComponent
  ],
  exports: [
    LandingComponent,
    BreadcrumbsComponent
  ],
  providers: [
    i18nProvider(i18n)
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
