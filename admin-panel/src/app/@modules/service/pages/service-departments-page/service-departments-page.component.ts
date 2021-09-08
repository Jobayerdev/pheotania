import { Component, OnInit } from '@angular/core';
import { IBaseFilter, IBaseResponse } from '@shared/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { PathsEnum } from '@shared/enums/paths.enum';
import { ServiceDepartmentsService } from '@shared/services/serviceDepartments/serviceDepartments.service';

@UntilDestroy()
@Component({
  selector: 'app-service-departments-page',
  templateUrl: './service-departments-page.component.html',
  styleUrls: ['./service-departments-page.component.scss'],
})
export class ServiceDepartmentsPageComponent implements OnInit {
  readonly routePathsEnum = PathsEnum;
  loading: boolean = false;

  response: any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(private serviceDepartmentsService: ServiceDepartmentsService) {}
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
    this.serviceDepartmentsService
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
    this.serviceDepartmentsService
      .delete(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.response.data = this.response.data.filter(
          (x: any) => x.id !== res?.payload?.id,
        );
      });
  }
  onCurrentPageDataChange(currentPage: number) {
    this.loadData({ page: currentPage, take: 10 });
  }
}
