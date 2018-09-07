import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter, map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreadcrumbRouterData } from '@app/core/breadcrumbs/breadcrumbs.model';

function hasBreadcrumb(breadcrumb: string | Function, route: ActivatedRouteSnapshot): boolean {
  return breadcrumb && (!route.parent || breadcrumb !== route.parent.data.breadcrumb);
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs$: Observable<any[]>;
  public display$: Observable<boolean>;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        const breadcrumbs = [];
        let route = this.route.snapshot;

        while (route) {
          const data = route.data as BreadcrumbRouterData;
          const breadcrumb = data.breadcrumb;

          if (hasBreadcrumb(breadcrumb, route)) {
            const title = typeof breadcrumb === 'function' ? breadcrumb(data) : breadcrumb;
            const url = route.pathFromRoot
              .map(path =>
                path.url
                  .filter(segment => segment.path !== '')
                  .map(segment => segment.path).join('/')
              )
              .filter(path => path !== '')
              .join('/');
            const crumb = { title, url };

            breadcrumbs.push(crumb);
          }
          route = route.children && route.children.find(route => route.outlet === 'primary');
        }
        console.info('build breadcrumbs');
        return breadcrumbs;
      }),
      shareReplay(1)
    );

    this.display$ = this.breadcrumbs$.pipe(map(crumbs => crumbs.length > 1));
  }

}
