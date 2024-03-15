import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  loginForm: FormGroup;
  admin: any;
  user: User;
  errorMsg: boolean = false;

  constructor(private router: Router, private appService: AppService, private userService: UserserviceService) {
    this.loginForm = new FormGroup(
      {
        adminUsername: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      }
    )
  }

  ngOnInit(): void {
    
    // this.userservice.getUsers().subscribe((data) => {
    //   this.users = data;
    // })
  }

  onFormSubmit = () => {
    let adminUsername = this.loginForm.value.adminUsername;
    let adminPassword = this.loginForm.value.password;

    this.user = {
      userName : adminUsername,
      password : adminPassword,
     
    }

     this.userService.loginUser(this.user).subscribe(
      (authenticatedUser) => {
        if(authenticatedUser && authenticatedUser.userType.toLowerCase() === 'admin') {
      localStorage.setItem("isLoggedIn", "true");
      let token = (adminUsername + ':' + adminPassword);
      localStorage.setItem("token", token);
      this.appService.loggedIn.next(true);
      console.log("ADMIN LOGGED IN SUCCESSFULLY");
        this.router.navigateByUrl("/update-connection");
        }
        else {
          alert("you are not admin, so this unauthorized access please try with admin credentials");
        }
    },
    (error) => {
      this.errorMsg = true;
    }
     );
  }

}



