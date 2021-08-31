import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IBaseResponse } from '@shared/interfaces';
import { PathsEnum } from '@shared/enums/paths.enum';
import { Router } from '@angular/router';
import { ServiceService } from './../../../../@shared/services/service/service.service';

@UntilDestroy()
@Component({
  selector: 'app-create-service-page',
  templateUrl: './create-service-page.component.html',
  styleUrls: ['./create-service-page.component.scss'],
})
export class CreateServicePageComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private servicesService: ServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.servicesService
        .create(this.validateForm.value)
        .pipe(untilDestroyed(this))
        .subscribe((res: IBaseResponse) => {
          this.router.navigate([PathsEnum.serviceList]);
        });
    }
  }
}
