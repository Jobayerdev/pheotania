import { Component, OnInit } from '@angular/core';
import {
  IBaseFilter,
  IBaseFilterPayload,
  IBaseResponse,
} from '@shared/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { NzModalService } from 'ng-zorro-antd/modal';
import { PathsEnum } from '@shared/enums/paths.enum';
import { PetTypeService } from './../../../../@shared/services/pet-type.service';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-pet-types-page',
  templateUrl: './pet-types-page.component.html',
  styleUrls: ['./pet-types-page.component.scss'],
})
export class PetTypesPageComponent implements OnInit {
  readonly routePathsEnum = PathsEnum;

  loading: boolean = false;
  response: IBaseFilterPayload | any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(
    private breedService: PetTypeService,
    private modal: NzModalService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadData({ page: 1, take: 10 });
  }

  //filter
  loadData(options: IBaseFilter) {
    this.loading = true;
    this.breedService
      .filter(options)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.loading = false;
        this.response = {
          data: res?.payload?.data,
          page: options.page,
          take: 10,
          total: res.total,
        };
      });
    this.loading = false;
  }

  // Delete
  onDelete(id: string) {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these?</i>',
      nzContent: '',
      nzOnOk: () =>
        this.breedService
          .delete(id)
          .pipe(untilDestroyed(this))
          .subscribe((res: IBaseResponse) => {
            this.router.navigate([this.router.url]);
          }),
    });
  }
  onCurrentPageDataChange(currentPage: number) {
    this.loadData({ page: currentPage, take: 10 });
  }
}
