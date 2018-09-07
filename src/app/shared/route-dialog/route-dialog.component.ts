import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { RouteDialogRouterData } from '@app/shared/route-dialog/route-dialog.model';

@Component({
  selector: 'app-route-dialog',
  template: ''
})
export class RouteDialogComponent implements OnInit, OnDestroy {
  private instance: MatDialogRef<any, any>;
  private dialogSubscription = Subscription.EMPTY;

  constructor(private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.pipe(delay(0))
      .subscribe((data: RouteDialogRouterData) => {
        if (this.instance) {
          this.close();
        }

        const originalConfig = data.dialog.config || {};
        const config = Object.assign({}, originalConfig, {
          data: data.dialog.data ? data[data.dialog.data] : originalConfig.data
        } as MatDialogConfig);

        this.instance = this.dialog.open(data.dialog.dialogComponent, config);
        this.dialogSubscription = this.instance
          .afterClosed()
          .subscribe(() => {
            this.router.navigate([
              {
                outlets: {
                  dialog: null
                }
              }
            ]);
          });
      });
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.close();
    }
  }

  private close() {
    this.dialogSubscription.unsubscribe();
    this.instance.close();
  }
}
