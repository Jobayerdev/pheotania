import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UsersService } from '@shared/services/users/users.service';

@UntilDestroy()
@Component({
  selector: 'app-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrls: ['./update-user-page.component.scss'],
})
export class UpdateUserPageComponent implements OnInit {
  validateForm!: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private route: ActivatedRoute,
    private notificationService: NzNotificationService,
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.userId = id;
    this.getUserById(id);
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      type: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    this.validateForm.value;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.userService
        .update(this.userId, this.validateForm.value)
        .pipe(untilDestroyed(this))
        .subscribe((res) => {
          this.notificationService.success('Update', '');
        });
    }
  }

  // Get user info
  getUserById(id: string) {
    this.userService
      .getById(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.validateForm.setValue({
          name: res.payload.name,
          email: res.payload.email,
          phoneNumber: res.payload.phoneNumber,
          type: res.payload.type,
          gender: res.payload.gender,
          address: res.payload.address,
        });
      });
  }
}
