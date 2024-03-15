import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { UpdateConnectionComponent } from './connection/update-connection/update-connection.component';



@NgModule({
  declarations: [
    AdminloginComponent,
    UpdateConnectionComponent,
   
  ],
  imports: [
    SharedmoduleModule
  ]
})
export class AdminModule { }
