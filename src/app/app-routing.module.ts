import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modules
import { PagesRoutingModule } from './pages/pages.routing.module';
import { AuthRoutingModule } from './auth/auth.routing';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
