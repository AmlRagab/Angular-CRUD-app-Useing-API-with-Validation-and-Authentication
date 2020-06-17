
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
isClicked=false;
  signinForm = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),


  password: new FormControl(null,[Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/)]),

  });
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
    $('#signin').particleground();

}
onSubmit() {

             this._AuthService.signin( this.signinForm.value).subscribe(response=>{
               if(response.message=='success')
               {this._Router.navigate(["/profile"])
                 localStorage.setItem("Token",response.token)}
               console.log(response);
             })
  if(this.signinForm.valid){
  // TODO: Use EventEmitter with form value
  console.warn(this.signinForm.value);}
}

}

