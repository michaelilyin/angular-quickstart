import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouteDialogService {
  constructor(private router: Router) {
  }

  open(commands: (string|number)[]) {
    this.router.navigate([
      {
        outlets: {
          dialog: commands
        }
      }
    ]);
  }

  close() {
    this.router.navigate([
      {
        outlets: {
          dialog: null
        }
      }
    ])
  }
}

export const RouteDialogServiceProvider: Provider = RouteDialogService;
