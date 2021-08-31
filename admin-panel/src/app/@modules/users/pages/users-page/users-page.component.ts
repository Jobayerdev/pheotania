import { Component, OnDestroy, OnInit } from '@angular/core'
import {
  IBaseFilter,
  IBaseFilterPayload,
  IBaseResponse
} from '@shared/interfaces/base.interfaces'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

import { NzModalService } from 'ng-zorro-antd/modal'
import { PathsEnum } from '@shared/enums/paths.enum'
import { UsersService } from './../../../../@shared/services/users/users.service'

interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}

@UntilDestroy()
@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  readonly routePathsEnum = PathsEnum;

  loading: boolean = false;
  response: IBaseFilterPayload | any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(
    private usersService: UsersService,
    private modal: NzModalService
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

  //filter
  loadData(options: IBaseFilter) {
    this.loading = true;
    this.usersService
      .filter(options)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        console.log("🚀 ~ file: users-page.component.ts ~ line 61 ~ UsersPageComponent ~ .subscribe ~ res", res)
        this.loading = false;
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
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these?</i>',
      nzContent: '',
      nzOnOk: () =>
        this.usersService
          .delete(id)
          .pipe(untilDestroyed(this))
          .subscribe((res: IBaseResponse) => {}),
    });
  }
  onCurrentPageDataChange(currentPage: number) {
    this.loadData({ page: currentPage, take: 10 });
  }
}
