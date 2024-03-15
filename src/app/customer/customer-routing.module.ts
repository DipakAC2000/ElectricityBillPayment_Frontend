import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { AddcustomerComponent } from './customeruser/addcustomer/addcustomer.component';
import { ApplyConnectionComponent } from './connection/apply-connection/apply-connection.component';


const routes : Routes = [
  {path:'customer-login',component:CustomerloginComponent},
  {path:'add-customer',component:AddcustomerComponent},
  {path:'apply-connection',component:ApplyConnectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
