import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogsRoutingModule } from './dialogs-routing.module';
import { VersionInfoDialogComponent } from './version-info-dialog/version-info-dialog.component';
import { SharedModule } from '@app/shared/shared.module';
import { i18nConfig, i18nProvider } from '@app/shared/i18n/i18n.config';
import i18n from './dialogs.i18n';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    DialogsRoutingModule,
    SharedModule,
    TranslateModule.forChild(i18nConfig())
  ],
  declarations: [
    VersionInfoDialogComponent
  ],
  entryComponents: [
    VersionInfoDialogComponent
  ],
  providers: [
    i18nProvider(i18n)
  ]
})
export class DialogsModule { }
