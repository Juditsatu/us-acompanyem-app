import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () =>import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'data',
    loadChildren: ()=>import('./data/data.module').then(m => m.DataModule)
  },
  {
    path:'**',
    redirectTo:'auth'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
