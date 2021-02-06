import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthServiceService } from "../services/auth-service.service"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'validform';
  registerForm: FormGroup;
  submitted = false;
  user : any;

// FormControl: It tracks the value and validation status of the individual form control.
// FormGroup: It tracks the same values and status for the collection of form controls.

  constructor(private formBuilder: FormBuilder, private auth : AuthServiceService,public router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group(
        {
          firstName: ['', Validators.required, Validators.minLength(3)],
          lastName: ['', Validators.required, Validators.minLength(1)],
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
    else{
      console.log(this.registerForm.value)
       this.auth.addUser(this.registerForm.value).subscribe(user => {
        this.user = user;
        if(this.user.email == this.registerForm.value.email){
          this.router.navigate(["/login"])
      }})  
    }

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
