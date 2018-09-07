import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { I18nResolver } from '../../shared/i18n/i18n.resolver';
import { RouteDialogComponent } from '../../shared/route-dialog/route-dialog.component';
import { VersionInfoDialogComponent } from './version-info-dialog/version-info-dialog.component';
import { RouteDialogRouterData } from '../../shared/route-dialog/route-dialog.model';

const routes: Routes = [
  {
    path: '',
    resolve: {
      translation: I18nResolver
    },
    children: [
      {
        path: 'version',
        component: RouteDialogComponent,
        data: {
          dialog: {
            dialogComponent: VersionInfoDialogComponent
          }
        } as RouteDialogRouterData
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogsRoutingModule { }
