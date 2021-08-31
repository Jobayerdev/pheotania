import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/@shared/services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-admin-login',
  templateUrl: './auth-admin-login.component.html',
  styleUrls: [`./auth-admin-login.component.scss`],
})
export class AuthAdminLoginComponent implements OnInit {
  isLoading: boolean = false;
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private authService: AuthService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      phoneNumber: ['0185375354', [Validators.required]],
      password: ['123456', [Validators.required]],
      remember: [true],
    });
  }
  submitForm(): void {
    const { phoneNumber, password } = this.validateForm.value;
    this.isLoading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.authService
      .adminLogin({ password, phoneNumber })
      .subscribe((res: any) => {
        this.notification.success('Authorization Success', '');
        this.router.navigate(['/admin']);
      });

    this.isLoading = false;
  }
}
