import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreekChallengesComponent } from './greeks/greeks-challenges.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'greeks-challenge', component: GreekChallengesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
