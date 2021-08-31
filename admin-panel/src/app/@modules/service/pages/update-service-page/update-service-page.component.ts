import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IBaseResponse } from '@shared/interfaces';
import { IUpdateService } from './../../../../@shared/interfaces/service.interfaces';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { ServiceService } from './../../../../@shared/services/service/service.service';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-update-service-page',
  templateUrl: './update-service-page.component.html',
  styleUrls: ['./update-service-page.component.scss'],
})
export class UpdateServicePageComponent implements OnInit {
  validateForm!: FormGroup;
  serviceId!: string;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    const id: any = this.activeRoute.snapshot.paramMap.get('id');
    this.serviceId = id;
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
    this.getById(id);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.updateById(this.serviceId, this.validateForm.value);
    }
  }

  getById(id: string) {
    this.serviceService
      .getById(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.validateForm.setValue({
          name: res.payload.name,
          price: res.payload.price,
          time: res.payload.time,
        });
      });
  }

  updateById(id: string, payload: IUpdateService) {
    this.serviceService
      .update(id, payload)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.UPDATED_SUCCESS, '');
        setTimeout(() => {
          this.router.navigate([PathsEnum.serviceList]);
        }, 1000);
      });
  }
}
