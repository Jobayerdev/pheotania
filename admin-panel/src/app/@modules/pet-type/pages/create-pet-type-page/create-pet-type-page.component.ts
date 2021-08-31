import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IBaseResponse } from '@shared/interfaces';
import { PathsEnum } from '@shared/enums/paths.enum';
import { PetTypeService } from '@shared/services';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-create-pet-type-page',
  templateUrl: './create-pet-type-page.component.html',
  styleUrls: ['./create-pet-type-page.component.scss'],
})
export class CreatePetTypePageComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private petTypesService: PetTypeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.petTypesService
        .create(this.validateForm.value)
        .pipe(untilDestroyed(this))
        .subscribe((res: IBaseResponse) => {
          this.router.navigate([PathsEnum.petTypeList]);
        });
    }
  }
}
