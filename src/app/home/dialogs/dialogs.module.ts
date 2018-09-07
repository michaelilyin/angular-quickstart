import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogsRoutingModule } from '@app/home/dialogs/dialogs-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { HomeSharedModule } from '@app/home/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DialogsRoutingModule,
    SharedModule,
    HomeSharedModule
  ],
  declarations: [
  ],
  entryComponents: [
  ]
})
export class DialogsModule {
}
