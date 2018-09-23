import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatProgressSpinnerModule} from '@angular/material';
import { RouteDialogComponent } from '@app/shared/route-dialog/route-dialog.component';
import { AuthServiceProvider } from '@app/shared/auth/auth.service';
import { RouteDialogServiceProvider } from '@app/shared/route-dialog/route-dialog.service';
import { I18nResolverProvider } from '@app/shared/i18n/i18n.resolver';
import { i18nProvider } from '@app/shared/i18n/i18n.config';
import i18n from './shared.i18n';
import { TranslateModule } from '@ngx-translate/core';
import { LockerComponent } from './locker/locker.component';
import { NullablePipe } from './pipes/nullable.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    RouteDialogComponent,
    LockerComponent,
    NullablePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    RouteDialogComponent,
    LockerComponent,
    NullablePipe
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
    };
  }
}
