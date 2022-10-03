import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  {path: 'system', loadChildren: () => import("./system/system.module").then((module) => module.StyleModule)},
  {path: '', redirectTo: 'system', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
