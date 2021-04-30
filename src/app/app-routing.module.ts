import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogameComponent } from './videogame/videogame.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideogameDetailComponent } from './videogame-detail/videogame-detail.component';

const routes: Routes = [
  { path: 'videogames', component: VideogameComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: VideogameDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
