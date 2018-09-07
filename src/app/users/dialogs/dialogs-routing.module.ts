import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { RouteDialogComponent } from '@app/shared/route-dialog/route-dialog.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserResolver } from '@app/users/shared/resolvers/user.resolver';
import { RouteDialogRouterData } from '@app/shared/route-dialog/route-dialog.model';
import { I18nResolver } from '@app/shared/i18n/i18n.resolver';

const userDialogRoute: Route = {
  path: ':id',
  component: RouteDialogComponent,
  resolve: {
    user: UserResolver
  },
  data: {
    dialog: {
      dialogComponent: UserDialogComponent,
      data: 'user'
    }
  } as RouteDialogRouterData
};

const routes: Routes = [
  {
    path: '',
    resolve: {
      translation: I18nResolver
    },
    children: [
      userDialogRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogsRoutingModule { }
