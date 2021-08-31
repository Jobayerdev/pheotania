import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBaseResponse, IUpdateBreed } from '@shared/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { PetTypeService } from './../../../../@shared/services/pet-type.service';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-update-pet-type-page',
  templateUrl: './update-pet-type-page.component.html',
  styleUrls: ['./update-pet-type-page.component.scss'],
})
export class UpdatePetTypePageComponent implements OnInit {
  validateForm!: FormGroup;
  breedId!: string;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private petTypeService: PetTypeService,
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
    this.petTypeService
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
    this.petTypeService
      .update(id, payload)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.UPDATED_SUCCESS, '');
        setTimeout(() => {
          this.router.navigate([PathsEnum.petTypeList]);
        }, 1000);
      });
  }
}
