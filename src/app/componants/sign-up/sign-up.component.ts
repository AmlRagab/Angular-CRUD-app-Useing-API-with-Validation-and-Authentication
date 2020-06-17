import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/Services/auth.service';
declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  responseMsg = '';
  isClicked = false;
  isSuccess= false;
danger=false;

  profileForm = new FormGroup({
    first_name: new FormControl(null, [Validators.maxLength(8), Validators.required, Validators.minLength(3)]),
    last_name: new FormControl(null, [Validators.maxLength(8), Validators.required, Validators.minLength(3)]),

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)]),

    age: new FormControl(null, [Validators.min(10), Validators.required]),


  });
  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {

    $('#signup').particleground();



  }
  onSubmit() {

    this.isClicked = true;
    if (this.profileForm.valid) {
      this._AuthService.signup(this.profileForm.value).subscribe(response => {


        if (response.message == "success") {
          this.isClicked = false;
                this.isSuccess=true;
              this.danger=false;
              this.responseMsg==response.message;

          this.profileForm.reset();
        }

        else{
          this.isSuccess=false;
          this.danger=true;
          this.profileForm.reset();
          this.isClicked = false;



        }
        

      })
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
    }
  }

}
