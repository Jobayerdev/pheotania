import { Component, OnInit } from '@angular/core';
import {
  IBaseFilter,
  IBaseFilterPayload,
  IBaseResponse,
} from '@shared/interfaces/base.interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { NzModalService } from 'ng-zorro-antd/modal';
import { PathsEnum } from '@shared/enums/paths.enum';
import { Router } from '@angular/router';
import { ServiceService } from './../../../../@shared/services/service/service.service';

@UntilDestroy()
@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  readonly routePathsEnum = PathsEnum;

  loading: boolean = false;
  response: IBaseFilterPayload | any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(
    private serviceService: ServiceService,
    private modal: NzModalService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadData({ page: 1, take: 10 });
  }

  //filter
  loadData(options: IBaseFilter) {
    this.loading = true;
    this.serviceService
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
        this.serviceService
          .delete(id)
          .pipe(untilDestroyed(this))
          .subscribe((res: IBaseResponse) => {
            this.router.navigate([PathsEnum.serviceList]);
          }),
    });
  }
  onCurrentPageDataChange(currentPage: number) {
    this.loadData({ page: currentPage, take: 10 });
  }
}
