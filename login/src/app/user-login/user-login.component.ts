import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(private formBuild: FormBuilder, private router: Router) {}

  loginForm: FormGroup = this.formBuild.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      console.log('err', this.loginForm);
      return;
    }

    //console.log(this.loginForm.value);
    this.loginUser(this.loginForm.value);
  }

  loginUser(user: any) {
    axios
      .post('http://localhost:3001/auth/login', user)
      .then((res) => {
        if (res.status === 200) {
          //route to dashboard
          this.router.navigate(['dashboard']);
        } else alert('Username and password not match');
      })
      .catch((error) => {
        alert('Username and password not match');
      });
  }
}
