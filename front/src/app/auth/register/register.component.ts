import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    address: new FormControl('',[Validators.required]),
    qualifications: new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',[Validators.required]),
    passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(8)]),
  })
  isPasswordConfirmMatch:boolean=false;
  constructor(private spinner :NgxSpinnerService,private router: Router) { }
  goToLoginPage(){
this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }
submit(){
  this.spinner.show();
  const formValue =this.registerForm.value;
  console.log(formValue);
  setTimeout(() => {
    this.spinner.hide();
    this.router.navigate(['/']);
  },2000)
}
}
