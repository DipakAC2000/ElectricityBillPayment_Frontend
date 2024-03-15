import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address.model';
import { Connection } from 'src/app/models/connection.model';
import { ConnectionserviceService } from 'src/app/services/connectionservice.service';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-apply-connection',
  templateUrl: './apply-connection.component.html',
  styleUrls: ['./apply-connection.component.css']
})
export class ApplyConnectionComponent {
   
  connectionAddress : Connection;
  address: Address;
  currentUserId: number;
  currentCustomerId : number;

  constructor(
    private formbuilder: FormBuilder,
    private connectionService: ConnectionserviceService,
    private customerService: CustomerserviceService,
    private userService: UserserviceService
  ) {}


  //now applying for connection
  applyConnectionForm =this.formbuilder.group({
    //connection fields
    connectionType: ['', Validators.required],
    phaseType: ['', Validators.required],
   
    //address fields
    flatOrHouseNumber: ['', Validators.required],
    buidingName: ['', Validators.required],
    village: ['', Validators.required],
    taluka: ['', Validators.required],
    district: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    landmark: ['', Validators.required],  
  });


  ngOnInit(): void {
    let token = localStorage.getItem("token");
    //console.log(token);
    let currentUsername = token.split(":")[0];
    //console.log(btoa(currentUsername));  //encrypted username
     
    this.userService.getUserbyUsername(currentUsername).subscribe(data => {
         console.log(data);
         this.currentUserId = data.id;
         console.log(this.currentUserId);

         // as for fetching the customerId;
         this.customerService.getCustomerByUserID(this.currentUserId).subscribe(customerData =>{
          console.log(customerData);
          this.currentCustomerId = customerData.customerId;
          console.log(this.currentCustomerId);
        });
    });
  }


  onSubmit(applyConnectionFormsvalue) {
    if(this.applyConnectionForm.valid) {
      this.connectionAddress ={
        connectionType: applyConnectionFormsvalue.connectionType,
        phaseType: applyConnectionFormsvalue.phaseType,

        address:this.address={
          flatOrHouseNumber:applyConnectionFormsvalue.flatOrHouseNumber,
          buidingName:applyConnectionFormsvalue.buidingName,
          village:applyConnectionFormsvalue.village,
          taluka:applyConnectionFormsvalue.taluka,
          district:applyConnectionFormsvalue.district,
          state:applyConnectionFormsvalue.state,
          pincode:applyConnectionFormsvalue.pincode,
          landmark:applyConnectionFormsvalue.landmark,
        }
      }
     
      
      

      //now by implementing the services methods 

      if (this.currentCustomerId) {
        //console.log(this.currentCustomerId);
        this.connectionService.addConnection(this.currentCustomerId, this.connectionAddress).subscribe(
          (connection) => {
            console.log('You had successfully applied for connection:', connection);
          },
          (error) => {
            console.error('Error Occurred: ', error);
          }
        );
      } else {
        console.log('Current customer ID is not defined or invalid.');
      }
    } else {
      console.log('Form is invalid, please check the fields.');
    }
  }
}
    