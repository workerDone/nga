import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {action, computed, observable } from 'mobx-angular';
import { NavigationService } from '../../../../services';
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
    private http: HttpClient,
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
    if (this.form.valid ) {
      const {name, email, password} = this.form.value;
      this.http.post('https://app-phone-app.herokuapp.com/registration', {'name': name, 'email': email, 'password': password} )
      .subscribe(data => {
        console.log(data);
      })
      const user = JSON.stringify(this.form.value)
      localStorage.setItem( 'users', user )
    }
  
  }
}
