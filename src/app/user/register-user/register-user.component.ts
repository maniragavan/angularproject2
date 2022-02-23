import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import * as alertify from 'src/app/'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registrationForm : FormGroup;
  formSubmited:boolean;
  user:User;
  constructor(private fb: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    //this.registrationForm = new FormGroup({
      //userName: new FormControl(null,Validators.required),
      //email: new FormControl(null,[Validators.required,Validators.email]),
      //password: new FormControl(null,[Validators.required,Validators.minLength(5)]),
     // confirmPassword: new FormControl(null,Validators.required),
      //mobile: new FormControl(null,Validators.required)
    //})
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName :[null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(5)]],
      confirmPassword: [null,Validators.required],
      mobile: [null,Validators.required]
    },{Validators: this.matchPasswordValidator})

  }
  matchPasswordValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
            {notmatched: true};
  }

  get username()
  {
      return this.registrationForm.get('userName') as FormControl;
  }
  get email()
  {
      return this.registrationForm.get('email') as FormControl;
  }
  get password()
  {
      return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword()
  {
      return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile()
  {
      return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(){

    console.log(this.registrationForm);
    this.formSubmited =true;
    if(this.registrationForm.valid)
    {
    this.userService.saveUsers(this.getUser());
    this.formSubmited =false;
    }

  }
  getUser(): User{
    return this.user = {
      name : this.username.value,
      email : this.email.value,
      password : this.password.value,
      mobile: this.mobile.value
    }
  }



}
