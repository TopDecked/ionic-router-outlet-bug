import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metagame-overview',
  templateUrl: './metagame-overview.page.html',
  styleUrls: ['./metagame-overview.page.scss'],
})
export class MetagameOverviewPage implements OnInit {

  constructor(private router: Router) {
   }

  ngOnInit() {
    console.warn('Configured routes: ', this.router.config);
  }

  openRecentEvents() {
    this.router.navigateByUrl('/metagame/(detail:recent-events)');
  }

}
