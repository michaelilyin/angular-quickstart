import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from '@app/admin/admin-routing.module';
import { UsersComponent } from '@app/admin/users/users.component';
import { UserComponent } from '@app/admin/users/user/user.component';
import { UsersSharedModule } from '@app/users/shared/shared.module';
import { SharedModule } from '@app/shared/shared.module';
import { AdminComponent } from '@app/admin/admin.component';
import { TranslateModule } from '@ngx-translate/core';
import { i18nConfig, i18nProvider } from '@app/shared/i18n/i18n.config';
import i18n from './admin.i18n';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    UsersSharedModule,
    TranslateModule.forChild(i18nConfig())
  ],
  declarations: [
    UsersComponent,
    UserComponent,
    AdminComponent
  ],
  providers: [
    i18nProvider(i18n)
  ]
})
export class AdminModule { }
