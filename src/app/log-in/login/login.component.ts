import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { sheredModule } from '../../shared/shered.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  submited: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {

  }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/employees']);
    }
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
  }

  togglePassword(): void {
  this.showPassword = !this.showPassword;
}

  onSubmit() {
    this.submited = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      const params: any = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };
      this.authService.login(params);
      this.router.navigate(['/employees']);
    }
  }
}
