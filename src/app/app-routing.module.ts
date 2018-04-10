import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { StyleComponent }   from './style/style.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'style', component: StyleComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}