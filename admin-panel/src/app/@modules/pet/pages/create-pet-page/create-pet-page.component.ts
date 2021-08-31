import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IBaseResponse } from '@shared/interfaces';
import { PathsEnum } from '@shared/enums/paths.enum';
import { PetService } from './../../../../@shared/services/pet.service';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-create-pet-page',
  templateUrl: './create-pet-page.component.html',
  styleUrls: ['./create-pet-page.component.scss'],
})
export class CreatePetPageComponent implements OnInit {
  validateForm!: FormGroup;
  avatarUrl!: '';
  avatarLoading!: false;

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      petFor: ['', [Validators.required]],
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      type: ['', [Validators.required]],
      breed: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      primaryColor: ['', [Validators.required]],
      secondaryColor: ['', [Validators.required]],
      eyeColor: ['', [Validators.required]],
      vaccinated: ['', [Validators.required]],
      spayed: ['', [Validators.required]],
      injured: ['', [Validators.required]],
      purebred: ['', [Validators.required]],
      heat: ['', [Validators.required]],
      pottyTrained: ['', [Validators.required]],
      specialDiet: ['', [Validators.required]],
      hypollergenic: ['', [Validators.required]],
      activeArea: ['', [Validators.required]],
      lifeStyle: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      this.petService
        .create(this.validateForm.value)
        .pipe(untilDestroyed(this))
        .subscribe((res: IBaseResponse) => {
          this.router.navigate([PathsEnum.breedList]);
        });
    }
  }

  onChangeAvatar(e: any) {
    console.log(e);
  }
}
