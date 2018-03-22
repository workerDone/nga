import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from "@angular/router";

import { NavigationService } from '../../../../services'
import {
  uppercaseValidator, numbersValidator,
  emailValidator, markAsTouchedAllFormInputs
} from '../../../../helpers';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private route: ActivatedRoute,    
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    const passwordValidators = [
      Validators.required,
      uppercaseValidator(/[A-Z]+/),
      numbersValidator(/[0-9]+/),
      Validators.minLength(6)
    ];
    this.form = this.formBuilder.group({
      name : ['', [ Validators.required ] ],
      email: ['', [Validators.required, emailValidator(/\S+@\S+\.\S+/)]],
      password: ['', Validators.compose(passwordValidators)],
      retry_password: ['', Validators.compose(passwordValidators)],
      checkbox_agree: [false, [Validators.required, Validators.pattern('true')]]
    });
  }
  register() {
    if (this.form.valid ){
      const user = JSON.stringify(this.form.value)
      localStorage.setItem( 'users', user )
    }
  
  }
}
