import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserResolverProvider } from '@app/users/shared/resolvers/user.resolver';
import { i18nProvider } from '@app/shared/i18n/i18n.config';
import i18n from './shared.i18n';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserInfoComponent
  ],
  exports: [
    UserInfoComponent
  ],
  providers: [
    UserResolverProvider,
    i18nProvider(i18n)
  ]
})
export class UsersSharedModule { }
