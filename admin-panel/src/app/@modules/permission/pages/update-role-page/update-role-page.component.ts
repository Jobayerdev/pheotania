import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IBaseResponse } from '@shared/interfaces/base.interfaces';
import { IUpdateRole } from '@shared/interfaces/Roles.interfaces';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { RoleService } from '@shared/services/role/role.service';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-update-role-page',
  templateUrl: './update-role-page.component.html',
  styleUrls: ['./update-role-page.component.scss'],
})
export class UpdateRolePageComponent implements OnInit {
  validateForm!: FormGroup;
  roleId!: string;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private roleService: RoleService,
    private notificationService: NzNotificationService,
  ) {}

  ngOnInit(): void {
    const id: any = this.activeRoute.snapshot.paramMap.get('id');
    this.roleId = id;
    this.validateForm = this.fb.group({
      title: ['', [Validators.required]],
    });
    this.getById(id);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.updateById(this.roleId, this.validateForm.value);
    }
  }

  getById(id: string) {
    this.roleService
      .getById(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.validateForm.setValue({
          title: res.payload.title,
        });
      });
  }

  updateById(id: string, payload: IUpdateRole) {
    this.roleService
      .update(id, payload)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.UPDATED_SUCCESS, '');
        setTimeout(() => {
          this.router.navigate([PathsEnum.permissionsRoles]);
        }, 1000);
      });
  }
}
