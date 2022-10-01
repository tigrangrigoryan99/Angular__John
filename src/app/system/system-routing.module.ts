import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPageComponent } from './blog-page/blog-page.component';
import { DesignePageComponent } from './designe-page/designe-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SystemComponent } from './system.component';
import { WorkPageComponent } from './work-page/work-page.component';

const systemRoutes: Routes = [
  {path: "", component: SystemComponent, children: [
    {path: "", component: MainPageComponent},
    {path: "blog", component: BlogPageComponent},
    {path: "work", component: WorkPageComponent},
    {path: "designe", component: DesignePageComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(systemRoutes)],
  exports: [RouterModule],
})

export class SystemRoutingModule {}
