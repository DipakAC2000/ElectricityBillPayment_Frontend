import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { User } from 'src/app/models/user.model';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  userCustomer: Customer;
  user: User;


  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerserviceService,
    private userService: UserserviceService
  ) { }


  //form details which we are adding
  addCustomerForm = this.formBuilder.group({
    // Customer Fields
    aadhaarNumber: ['', Validators.required],
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', Validators.required],

    // User Fields
    userName: ['', Validators.required],
    password: ['', Validators.required],
    userType: ['customer', Validators.required],
  });



  ngOnInit(): void {

  }

  onSubmit(addcustomerFormsvalue) {
    if (this.addCustomerForm.valid) {
      this.userCustomer = {
        aadhaarNumber: addcustomerFormsvalue.aadhaarNumber ,
        firstName: addcustomerFormsvalue.firstName ,
        middleName: addcustomerFormsvalue.middleName ,
        lastName: addcustomerFormsvalue.lastName ,
        gender: addcustomerFormsvalue.gender,
        email: addcustomerFormsvalue.email,
        mobileNumber: addcustomerFormsvalue.mobileNumber,
        user:this.user={
          userName: addcustomerFormsvalue.userName,
          password: addcustomerFormsvalue.password,
          userType: addcustomerFormsvalue.userType,
        }
      }

      // Assuming you have methods in your services to add a customer and user
      this.customerService.postCustomer(this.userCustomer).subscribe(
        (customer) => {
          console.log('Customer added successfully:', customer);
        },
        (error) => {
          console.error('Error adding customer:', error);
        }
      );

    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}