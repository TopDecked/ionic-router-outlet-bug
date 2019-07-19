import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MetagameOverviewPage } from './metagame-overview.page';

const routes: Routes = [
  {
    path: '',
    component: MetagameOverviewPage
  },
  {
    path: 'recent-events',
    loadChildren: '../recent-events/metagame-recent-events.module#MetagameRecentEventsPageModule',
    outlet: 'detail'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MetagameOverviewPage]
})
export class MetagameOverviewPageModule { }
