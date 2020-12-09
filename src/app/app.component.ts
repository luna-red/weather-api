import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'interview-app';
  descPage: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    /* This is just a work around as I didn't start the project with a normal landing page component
     in a prod environment, I would have a dedicated landing page synced up with the base route, then
     just show the elements for the given route */
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.descPage = (event.url.indexOf('area-desc') !== -1);
      }
    });

  }


}
