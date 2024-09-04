import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/home/register/register.component';
import { LandingpageComponent } from './components/home/landingpage/landingpage.component';
import { LoginComponent } from './components/home/login/login.component';
import { LandingcontentComponent } from './components/home/landingcontent/landingcontent.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:LandingpageComponent,children:[
    {path:"",redirectTo:"landing",pathMatch:'full'},
    {path:"landing",component:LandingcontentComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
