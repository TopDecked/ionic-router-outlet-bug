import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MetagameRecentEventsPage } from './metagame-recent-events.page';

const routes: Routes = [
  {
    path: '',
    component: MetagameRecentEventsPage,
  },
  {
    path: ':id',
    component: MetagameRecentEventsPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MetagameRecentEventsPage],
  entryComponents: [MetagameRecentEventsPage],
})
export class MetagameRecentEventsPageModule { }
