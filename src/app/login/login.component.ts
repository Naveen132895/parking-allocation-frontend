import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthServiceService } from "../services/auth-service.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'validform';
  registerForm: FormGroup;
  submitted = false;
  userId : any;

  constructor(private formBuilder: FormBuilder, private auth : AuthServiceService,public router: Router) { }

  ngOnInit(): void {
    if((localStorage.getItem("token"))){
      this.router.navigate(["home"])
    }
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      },
    );
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else if(true){
     this.auth.getUserById(this.registerForm.value.email).subscribe(user => {
       this.userId = user.email;
       if(user.password == this.registerForm.value.password){
        localStorage.setItem("token",this.userId);
        this.router.navigate(['home'])
       }else{
         alert("Invalid Credential")
       }
     });
      
    }

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}
