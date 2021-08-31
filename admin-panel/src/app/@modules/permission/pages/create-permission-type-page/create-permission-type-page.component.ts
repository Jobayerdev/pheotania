import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IBaseResponse } from '@shared/interfaces/base.interfaces';
import { ICreateRole } from '@shared/interfaces/Roles.interfaces';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { PermissionTypeService } from '@shared/services/permission-type/permissionType.service';
import { Router } from '@angular/router';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-create-permission-type-page',
  templateUrl: './create-permission-type-page.component.html',
  styleUrls: ['./create-permission-type-page.component.scss'],
})
export class CreatePermissionTypePageComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private permissionTypeService: PermissionTypeService,
    private notificationService: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.create(this.validateForm.value);
    }
  }

  create(payload: ICreateRole) {
    this.permissionTypeService
      .create(payload)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.CREATED_SUCCESS, '');
        this.router.navigate([PathsEnum.permissionsTypes]);
      });
  }
}
