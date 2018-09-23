import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/auth/auth.service';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

}
