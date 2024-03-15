import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { AdminloginComponent } from './admin/components/adminlogin/adminlogin.component';
import { UpdateConnectionComponent } from './admin/connection/update-connection/update-connection.component';

const routes : Routes = [
  {path:'',component:HomecomponentComponent},
  {path:'admin-login',component:AdminloginComponent},
  {path:'update-connection',component:UpdateConnectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
