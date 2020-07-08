import {Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormControl, ValidationErrors, Validators} from "@angular/forms";
import {UsersService} from "../users.service";
import {ValidatorsService} from "../validators.service";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  @Output() closeFormRegistrationEmitter =  new EventEmitter();
  inputPassword = 'password';
  constructor(private usersService: UsersService, public validatorsService: ValidatorsService) { }

  userValidation = (control: FormControl) => {
    let value = control.value;
    if (!this.validatorsService.validation(value, this.validatorsService.isLoginValidationArray)) {
      return {userValidator: this.validatorsService.message}
    }
    else return null;
  };

  passwordValidation = (control: FormControl) => {
    let value = control.value;
    if (!this.validatorsService.validation(value, this.validatorsService.isPasswordValidationArray)) {
      return {userValidator: this.validatorsService.message}
    }
    else return null;
  };

  userProfileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, this.userValidation]),
    password: new FormControl('',[Validators.required, this.passwordValidation]),
    checkbox: new FormControl('', )
  });

  ngOnInit = () => {
    if(this.usersService.userLocal) {
      this.userProfileForm.patchValue({
        firstName: `${this.usersService.userLocal.firstName}`,
        password: `${this.usersService.userLocal.password}`
      });
    }
  };

  closeFormRegistration = () => {
    this.closeFormRegistrationEmitter.emit();
  };

  onSubmit() {
    this.usersService.userName = this.userProfileForm.value.firstName;
    this.closeFormRegistration();
    if(this.userProfileForm.value.checkbox === true) {
      localStorage.setItem('currentUser', JSON.stringify(this.userProfileForm.value));
    }
    else sessionStorage.setItem('currentUser', JSON.stringify(this.userProfileForm.value));
  };

  mouseoverPass = () => {
    this.inputPassword = "text";
  };

  mouseoutPass = () => {
    this.inputPassword = 'password';
  };
}
