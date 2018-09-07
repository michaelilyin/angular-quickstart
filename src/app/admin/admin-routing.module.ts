import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '@app/admin/admin.component';
import { UsersComponent } from '@app/admin/users/users.component';
import { UserComponent } from '@app/admin/users/user/user.component';
import { UserResolver } from '@app/users/shared/resolvers/user.resolver';
import { breadcrumbs } from '@app/admin/admin.breadcrumbs';
import { BreadcrumbRouterData } from '@app/core/breadcrumbs/breadcrumbs.model';
import { I18nResolver } from '@app/shared/i18n/i18n.resolver';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    resolve: {
      translation: I18nResolver
    },
    data: {
      breadcrumb: breadcrumbs.admin
    } as BreadcrumbRouterData,
    children: [
      {
        path: 'users',
        data: {
          breadcrumb: breadcrumbs.users
        } as BreadcrumbRouterData,
        children: [
          {
            path: '',
            component: UsersComponent
          },
          {
            path: ':userId',
            component: UserComponent,
            resolve: {
              user: UserResolver
            },
            data: {
              breadcrumb: breadcrumbs.user
            } as BreadcrumbRouterData
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
