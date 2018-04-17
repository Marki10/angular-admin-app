import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { StyleComponent }   from './style/style.component';
import { WelcomeComponent }   from './welcome/welcome.component';
import { FeedbackComponent }   from './feedback/feedback.component';
 
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'style', component: StyleComponent },
  { path: 'feedback', component: FeedbackComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}