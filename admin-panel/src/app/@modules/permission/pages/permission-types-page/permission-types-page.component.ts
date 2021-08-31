import { Component, OnInit } from '@angular/core';
import {
  IBaseFilter,
  IBaseFilterPayload,
  IBaseResponse,
} from '@shared/interfaces/base.interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { PermissionTypeService } from '@shared/services/permission-type/permissionType.service';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-permission-types-page',
  templateUrl: './permission-types-page.component.html',
  styleUrls: ['./permission-types-page.component.scss'],
})
export class PermissionTypesPageComponent implements OnInit {
  readonly routePathsEnum = PathsEnum;
  loading: boolean = false;

  response: IBaseFilterPayload | any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(
    private permissionTypeService: PermissionTypeService,
    private notificationService: NzNotificationService
  ) {}

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

  loadData(options: IBaseFilter) {
    this.loading = true;
    this.permissionTypeService
      .filter(options)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.loading = false;
        this.response = {
          data: res.payload,
          page: options.page,
          take: 10,
          total: res.total,
        };
      });
  }

  // Delete
  onDelete(id: string) {
    this.permissionTypeService
      .delete(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.DELETED_SUCCESS, '');
        this.response.data = this.response.data.filter(
          (x: any) => x.id !== res.payload.id
        );
      });
  }
  onCurrentPageDataChange(currentPage: number) {
    this.loadData({ page: currentPage, take: 10 });
  }
}
