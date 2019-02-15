import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { SplashScreenComponent } from './page/splash-screen/splash-screen.component';

const routes: Routes = [
  {path:'',redirectTo:"/splash-screen",pathMatch:"full"},
  {path:'splash-screen',component:SplashScreenComponent,data:{animation:"SplashPage"}},
  {path:'home',component:HomeComponent,data:{animation:"HomePage"}},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
