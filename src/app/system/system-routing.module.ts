import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPageComponent } from './blog-page/blog-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SystemComponent } from './system.component';

const systemRoutes: Routes = [
  {path: "", component: SystemComponent, children: [
    {path: "",  redirectTo: 'main', pathMatch: 'full'},
    {path: "main", component: MainPageComponent},
    {path: "blog", component: BlogPageComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(systemRoutes)],
  exports: [RouterModule],
})

export class SystemRoutingModule {}
