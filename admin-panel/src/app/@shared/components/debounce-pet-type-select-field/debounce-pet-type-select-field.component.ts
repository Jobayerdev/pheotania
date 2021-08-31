import { Component, OnInit } from '@angular/core';
import { IBaseFilter, IBaseFilterPayload } from '@shared/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { PetTypeService } from '@shared/services';

@UntilDestroy()
@Component({
  selector: 'app-debounce-pet-type-select-field',
  templateUrl: './debounce-pet-type-select-field.component.html',
  styleUrls: ['./debounce-pet-type-select-field.component.scss'],
})
export class DebouncePetTypeSelectFieldComponent implements OnInit {
  loading: boolean = false;
  response: IBaseFilterPayload | any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(private petTypeService: PetTypeService) {}

  ngOnInit() {
    this.loadData({ page: 1, take: 1000 });
  }
  //filter
  loadData(options: IBaseFilter) {
    this.loading = true;
    this.petTypeService
      .filter(options)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.loading = false;
        this.response = {
          data: res?.payload,
          page: options.page,
          take: 1000,
          total: res.total,
        };
        console.log(this.response);
      });
    this.loading = false;
  }

  selectedUser(e: any) {
    console.log('I am callled');
    console.log(e);
  }
}
