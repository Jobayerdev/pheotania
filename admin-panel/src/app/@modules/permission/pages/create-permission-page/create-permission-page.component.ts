import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  IBaseResponse,
  IOption,
} from './../../../../@shared/interfaces/base.interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, map, switchMap } from 'rxjs/operators';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from './../../../../@shared/enums/paths.enum';
import { PermissionTypeService } from './../../../../@shared/services/permission-type/permissionType.service';
import { PermissionsService } from '@shared/services/permissions/permissions.service';
import { Router } from '@angular/router';
import { StaticEnum } from './../../../../@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-create-permission-page',
  templateUrl: './create-permission-page.component.html',
  styleUrls: ['./create-permission-page.component.scss'],
})
export class CreatePermissionPageComponent implements OnInit {
  searchChange$ = new BehaviorSubject('');
  optionList: IOption[] = [];
  selectedOption: IOption = {
    label: '',
    value: '',
  };
  isLoading = false;
  title: string = '';

  constructor(
    private permissionsService: PermissionsService,
    private notificationService: NzNotificationService,
    private router: Router,
    private permissionTypesService: PermissionTypeService,
  ) {}

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }

  onChangeTitle(e: any) {
    this.title = e.target.value;
  }

  ngOnInit(): void {
    const optionList$: Observable<IOption[]> = this.searchChange$
      .asObservable()
      .pipe(untilDestroyed(this))
      .pipe(debounceTime(500))
      .pipe(switchMap(this.getRandomOptions));
    optionList$.subscribe((data) => {
      this.optionList = data;
      this.isLoading = false;
    });
  }

  getRandomOptions = (name: string) =>
    this.permissionTypesService.filter({ searchTerm: name }).pipe(
      map((list: any) => {
        return list.payload.map((item: any) => {
          return {
            label: item.title,
            value: item.id,
          };
        });
      }),
    );

  submitForm(): void {
    if (this.title.length === 0) {
      this.notificationService.error('Invalid Title', '');
    } else if (Object.keys(this.selectedOption).length === 0) {
      this.notificationService.error('Invalid Permission Type', '');
    } else {
      this.permissionsService
        .create({
          permissionType: this.selectedOption as any,
          title: this.title,
        })
        .pipe(untilDestroyed(this))
        .subscribe((res: IBaseResponse) => {
          this.notificationService.success(StaticEnum.CREATED_SUCCESS, '');
          this.router.navigate([PathsEnum.permissions]);
        });
    }
  }
}
