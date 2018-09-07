import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogsRoutingModule } from './dialogs-routing.module';
import { UsersSharedModule } from '@app/users/shared/shared.module';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { SharedModule } from '@app/shared/shared.module';
import i18n from './dialogs.i18n';
import { i18nConfig, i18nProvider } from '@app/shared/i18n/i18n.config';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(i18nConfig()),
    DialogsRoutingModule,
    SharedModule,
    UsersSharedModule
  ],
  declarations: [
    UserDialogComponent
  ],
  entryComponents: [
    UserDialogComponent
  ],
  providers: [
    i18nProvider(i18n)
  ]
})
export class DialogsModule { }
