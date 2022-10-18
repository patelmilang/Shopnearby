import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/components/home/home.component';
import { LayoutComponent } from './module/shared/components/layout/layout.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path: 'user' ,
    loadChildren: () => import('./module/login/login-routing.module')
      .then(mod => mod.LoginRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
