import { NgModule } from '@angular/core';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { AddcustomerComponent } from './customeruser/addcustomer/addcustomer.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { ApplyConnectionComponent } from './connection/apply-connection/apply-connection.component';



@NgModule({
  declarations: [
    AddcustomerComponent,
    CustomerloginComponent,
    ApplyConnectionComponent
  ],
  imports: [
    SharedmoduleModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
