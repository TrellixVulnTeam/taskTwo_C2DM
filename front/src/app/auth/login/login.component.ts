import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordControl = new FormControl('',[Validators.required, Validators.minLength(8)])
  emailControl= new FormControl('',[Validators.email, Validators.required]);
  
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 30;
 // showLoader:boolean= false;
  constructor(private spinner :NgxSpinnerService, private router: Router) { 
   
    this.emailControl.hasError('required');
    this.emailControl.hasError('email');

  }
  
  ngOnInit(): void {
  }

  submit(){
    this.spinner.show();
    //this.showLoader=true;
    const emailValue= this.emailControl.value;
    const password = this.passwordControl.value;
    console.log(emailValue,password)
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['c']);
    },1500)
    
  }
  
  goToRegisterPage(){
    this.router.navigate(['register']);
  }
}
