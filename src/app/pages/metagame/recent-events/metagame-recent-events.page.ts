
import {
  AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-metagame-recent-events',
  templateUrl: './metagame-recent-events.page.html',
  styleUrls: ['./metagame-recent-events.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetagameRecentEventsPage implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    console.error('Metagame recent events initialized');
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  closeDetailOutlet() {
    console.log('closing detail outlet');
    this.router.navigate(
      [
        {
          outlets: {
            detail: null
          }
        }
      ],
      {
        relativeTo: this.route.parent.parent
      }
    );
  }

}
