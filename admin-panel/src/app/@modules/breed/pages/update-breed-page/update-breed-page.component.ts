import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { BreedService } from '@shared/services/breed/breed.service';
import { IBaseResponse } from '@shared/interfaces';
import { IUpdateBreed } from './../../../../@shared/interfaces/breed.interfaces';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-update-breed-page',
  templateUrl: './update-breed-page.component.html',
  styleUrls: ['./update-breed-page.component.scss'],
})
export class UpdateBreedPageComponent implements OnInit {
  validateForm!: FormGroup;
  breedId!: string;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private breedService: BreedService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    const id: any = this.activeRoute.snapshot.paramMap.get('id');
    this.breedId = id;
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
    });
    this.getById(id);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.updateById(this.breedId, this.validateForm.value);
    }
  }

  getById(id: string) {
    this.breedService
      .getById(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        console.log(res);
        this.validateForm.setValue({
          name: res.payload.name,
        });
      });
  }

  updateById(id: string, payload: IUpdateBreed) {
    this.breedService
      .update(id, payload)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.UPDATED_SUCCESS, '');
        setTimeout(() => {
          this.router.navigate([PathsEnum.breedList]);
        }, 1000);
      });
  }
}
