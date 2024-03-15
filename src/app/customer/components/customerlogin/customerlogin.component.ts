import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent {

  loginForm: FormGroup;
  user: User; 
  errorMsg: boolean=false;  // getting error so declared an empty string 

  
  constructor(private router: Router, private appService: AppService, private userService: UserserviceService) {
    this.loginForm = new FormGroup({
      customerUsername: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  ngOnInit(): void {
    
  }

  onFormSubmit = () => {
    let customerUsername = this.loginForm.value.customerUsername;
    let customerPassword = this.loginForm.value.password;

    //CALL  API GETUSERBYUSERNAME
    this.user = {
       userName : customerUsername,
       password : customerPassword,
       //userType: 'CUSTOMER',  // As this is the customer. 
    }
    this.userService.loginUser(this.user).subscribe(
      (authenticatedUser) => {
        if(authenticatedUser && authenticatedUser.userType.toLowerCase() === 'customer') {
        localStorage.setItem("isCustomerLoggedIn", "true");
        let token = (customerUsername + ':' + customerPassword);
        localStorage.setItem("token", token);
        this.appService.customerloggedIn.next(true);
        console.log("CUSTOMER LOGGED IN SUCCESSFULLY");
        this.router.navigateByUrl("/apply-connection");
        }
        else {
          alert("you are not customer so this unauthorized access please try with customer credentials");
        }
      },
      (error) => {
        this.errorMsg = true;
      }
    );
  }
}
