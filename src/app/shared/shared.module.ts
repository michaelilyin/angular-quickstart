import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { RouteDialogComponent } from '@app/shared/route-dialog/route-dialog.component';
import { AuthServiceProvider } from '@app/shared/auth/auth.service';
import { RouteDialogServiceProvider } from '@app/shared/route-dialog/route-dialog.service';
import { I18nResolverProvider } from '@app/shared/i18n/i18n.resolver';
import { i18nProvider } from '@app/shared/i18n/i18n.config';
import i18n from './shared.i18n';
import { TranslateModule } from '@ngx-translate/core';
import { LockerComponent } from './locker/locker.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    RouteDialogComponent,
    LockerComponent
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    RouteDialogComponent,
    LockerComponent
  ],
  providers: [
    I18nResolverProvider,
    i18nProvider(i18n)
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthServiceProvider,
        RouteDialogServiceProvider
      ]
    }
  }
}
