import { MatDialogConfig } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

export interface RouteDialogRouterData {
  dialog: RouteDialogConfig;
}

export interface RouteDialogConfig {
  config: Partial<MatDialogConfig>;
  dialogComponent: ComponentType<any>;
  data: string;
}
