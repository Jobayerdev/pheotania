import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { BreedService } from '@shared/services/breed/breed.service';
import { IBaseResponse } from './../../../../@shared/interfaces/base.interfaces';
import { PathsEnum } from '@shared/enums/paths.enum';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-create-breed-page',
  templateUrl: './create-breed-page.component.html',
  styleUrls: ['./create-breed-page.component.scss'],
})
export class CreateBreedPageComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private breedService: BreedService,
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
      this.breedService
        .create(this.validateForm.value)
        .pipe(untilDestroyed(this))
        .subscribe((res: IBaseResponse) => {
          this.router.navigate([PathsEnum.breedList]);
        });
    }
  }
}
