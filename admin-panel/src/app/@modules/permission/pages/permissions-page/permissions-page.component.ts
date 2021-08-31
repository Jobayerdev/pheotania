import { Component, OnInit } from '@angular/core';
import {
  IBaseFilter,
  IBaseFilterPayload,
  IBaseResponse,
} from '@shared/interfaces/base.interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { PathsEnum } from '@shared/enums/paths.enum';
import { PermissionsService } from '@shared/services/permissions/permissions.service';

@UntilDestroy()
@Component({
  selector: 'app-permissions-page',
  templateUrl: './permissions-page.component.html',
  styleUrls: ['./permissions-page.component.scss'],
})
export class PermissionsPageComponent implements OnInit {
  readonly routePathsEnum = PathsEnum;
  loading: boolean = false;

  response: IBaseFilterPayload | any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(private permissionsService: PermissionsService) {}
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
    this.permissionsService
      .filter(options)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.loading = false;
        this.response = {
          data: res.payload.data,
          page: options.page,
          take: 10,
          total: res.total,
        };
      });
  }
  // Delete
  onDelete(id: string) {
    this.permissionsService
      .delete(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {});
  }
  onCurrentPageDataChange(currentPage: number) {
    this.loadData({ page: currentPage, take: 10 });
  }
}
