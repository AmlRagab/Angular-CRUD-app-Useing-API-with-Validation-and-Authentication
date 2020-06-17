import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './componants/sign-in/sign-in.component';
import { ProfileComponent } from './componants/profile/profile.component';
import { SignOutComponent } from './componants/sign-out/sign-out.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { SignUpComponent } from './componants/sign-up/sign-up.component';


const routes: Routes = [
  {path:"" , redirectTo:"signin",pathMatch:'full'},
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent },
  {path:'profile', component:ProfileComponent},
  {path:'signout', component:SignOutComponent},
  {path:'**', component:NotFoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
