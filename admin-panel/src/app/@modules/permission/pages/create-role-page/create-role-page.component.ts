import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IBaseResponse } from '@shared/interfaces/base.interfaces';
import { ICreateRole } from '@shared/interfaces/Roles.interfaces';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { RoleService } from '@shared/services/role/role.service';
import { Router } from '@angular/router';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-create-role-page',
  templateUrl: './create-role-page.component.html',
  styleUrls: ['./create-role-page.component.scss'],
})
export class CreateRolePageComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
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
    this.roleService
      .create(payload)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.CREATED_SUCCESS, '');
        this.router.navigate([PathsEnum.permissionsRoles]);
      });
  }
}
