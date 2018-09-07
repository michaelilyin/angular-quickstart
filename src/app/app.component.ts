import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public locked$ = merge(
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      map(() => true)
    ),
    this.router.events.pipe(
      filter(event =>
        event instanceof NavigationEnd
        || event instanceof NavigationError
        || event instanceof NavigationCancel),
      map(() => false)
    )
  );

  constructor(private router: Router) {
  }
}
