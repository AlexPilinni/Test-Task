import { Injectable } from '@angular/core';
import {FormControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }
  message = '';

  hasDoubleSpace = (value) => {
    if(/\s{2,}/.test(value) === true) {
      this.message = 'Некорректный ввод данных(двойные пробелы)';
      return false;
    }
    else return true;
  };

  isLength3Valid = (value) => {
    if(value.length < 3) {
      this.message = 'Поле должно содержать больше 3 символов';
      return false;
    }
    else return true;
  };

  isLength6Valid = (value) => {
    if(value.length < 6) {
      this.message = 'Поле должно содержать больше 6 символов';
      return false;
    }
    else return true;
  };

  hasEmptyInput = (value) => {
    if(value === "") {
      this.message = 'Не заполненно обязательное поле';
      return false;
    }
    else return true;
  };

  hasNumber = (value) => {
    if(/[0-9]/.test(value) === false) {
      this.message = 'В пароле не хватает цифр';
      return false;
    }
    else return true;
  };

  hasUppercaseLetter = (value) => {
    if(/[A-Z]/.test(value) === false) {
      this.message = 'В пароле не хватает верхнего регистра';
      return false;
    }
    else return true;
  };

  hasLowercaseLetter = (value) => {
    if(/[a-z]/.test(value) === false) {
      this.message = 'В пароле не хватает нижнего регистра';
      return false;
    }
    else return true;
  };
  hasSpecialSymbols = (value) => {
    if(/[!@#$%^&*<>:;"'?/|+_=()]/.test(value) === false) {
      this.message = 'В пароле не хватает спец. символов';
      return false;
    }
    else return true;
  };

  isLoginValidationArray = [this.hasEmptyInput, this.hasDoubleSpace, this.isLength3Valid];
  isPasswordValidationArray = [this.hasEmptyInput, this.hasNumber, this.hasUppercaseLetter, this.hasLowercaseLetter, this.hasSpecialSymbols, this.isLength6Valid];

  validation = (value, validationArray) => {
    for (let item of validationArray) {
      item(value);
      if (item(value) === false) {
        break;
      }
      else {
        this.message = '';
      }
    }
    if (this.message !== '') {
      return false;
    }
    else return true;
  };
}
