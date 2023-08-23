import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [localStorage.getItem('email_GV') || '', [Validators.required, Validators.email]],
      password: [localStorage.getItem('password_GV') || '', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      localStorage.setItem('email_GV', this.loginForm.value.username);
      localStorage.setItem('password_GV', this.loginForm.value.password);
      localStorage.setItem('isLoggedIn_GV', 'true');
      this.router.navigate(['/posts']);
    }
  }
}
