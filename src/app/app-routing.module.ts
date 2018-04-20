import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { OptionsComponent }   from './options/options.component';
import { WelcomeComponent }   from './welcome/welcome.component';
import { FeedbackComponent }   from './feedback/feedback.component';
import { UsageComponent }   from './usage/usage.component';
 
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'feedback', component: FeedbackComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}