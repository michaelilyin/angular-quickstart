import { Component, Injector, OnInit } from '@angular/core';
import { RouteDialogComponent } from '../../../shared/route-dialog/route-dialog.component';
import { MatDialogRef } from '@angular/material';
import { version } from '../../../../environments/version';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-version-info-dialog',
  templateUrl: './version-info-dialog.component.html',
  styleUrls: ['./version-info-dialog.component.scss']
})
export class VersionInfoDialogComponent implements OnInit {

  public version = version;
  public environment = environment;

  constructor(private dialog: MatDialogRef<VersionInfoDialogComponent>) { }

  ngOnInit() {
  }

}
