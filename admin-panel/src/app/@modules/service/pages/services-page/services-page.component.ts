import { Component, OnInit } from '@angular/core';
import {
  IBaseFilter,
  IBaseFilterPayload,
  IBaseResponse,
} from '@shared/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { PathsEnum } from '@shared/enums/paths.enum';
import { ServiceService } from './../../../../@shared/services/services/service.service';

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

  constructor(private serviceService: ServiceService) {}
  ngOnInit(): void {
    this.loadData({ page: 1, take: 10 });
  }
  ngOnDestroy(): void {
    this.response = {
      data: [],
      page: 0,
      take: 0,
      total: 0,
    };
  }

  //filter
  loadData(options: IBaseFilter) {
    this.loading = true;
    this.serviceService
      .filter(options)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.response = {
          data: res.payload,
          page: options.page,
          take: 10,
          total: res.total,
        };
      });
    this.loading = false;
  }
  // Delete
  onDelete(id: string) {
    this.serviceService
      .delete(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {});
  }
  onCurrentPageDataChange(currentPage: number) {
    this.loadData({ page: currentPage, take: 10 });
  }
}
