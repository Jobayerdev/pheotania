import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { Router } from '@angular/router';
import { UsersService } from '@shared/services/users/users.service';

@UntilDestroy()
@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss'],
})
export class CreateUserPageComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private notificationService: NzNotificationService,
    private readonly routes: Router,
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      type: ['', [Validators.required]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^01[3-9][0-9]{8}$/)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.userService
        .create(this.validateForm.value)
        .pipe(untilDestroyed(this))
        .subscribe((res) => {
          this.notificationService.success('Created', '');
          this.routes.navigate([PathsEnum.users]);
        });
    }
  }
}
