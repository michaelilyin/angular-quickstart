import { Component, OnInit } from '@angular/core';
import { RouteDialogService } from '@app/shared/route-dialog/route-dialog.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private routerDialogService: RouteDialogService) { }

  ngOnInit() {
  }

  openDialog() {
    this.routerDialogService.open(['users', 123]);
  }
}
