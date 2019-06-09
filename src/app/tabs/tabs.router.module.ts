import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: '../explore/explore.module#ExplorePageModule'
          },
          {
            path: 'details',
            loadChildren: '../details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'main/tabs/explore',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'main/tabs/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
