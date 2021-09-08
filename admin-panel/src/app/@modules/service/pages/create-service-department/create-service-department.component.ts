import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IBaseResponse } from '@shared/interfaces';
import { ICreateServiceDepartment } from './../../../../@shared/interfaces/serviceDepartments.interfaces';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { Router } from '@angular/router';
import { ServiceDepartmentsService } from '@shared/services/serviceDepartments/serviceDepartments.service';
import { StaticEnum } from '@shared/enums/static.enum';
import { untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-create-service-department',
  templateUrl: './create-service-department.component.html',
  styleUrls: ['./create-service-department.component.scss'],
})
export class CreateServiceDepartmentComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serviceDepartmentService: ServiceDepartmentsService,
    private notificationService: NzNotificationService,
    private router: Router,
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

  create(payload: ICreateServiceDepartment) {
    this.serviceDepartmentService
      .create(payload)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.CREATED_SUCCESS, '');
        this.router.navigate([PathsEnum.permissionsTypes]);
      });
  }
}
