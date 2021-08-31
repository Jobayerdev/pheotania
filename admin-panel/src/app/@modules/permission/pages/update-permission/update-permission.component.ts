import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, map, switchMap } from 'rxjs/operators';

import { IBaseResponse } from './../../../../@shared/interfaces/base.interfaces';
import { IOption } from '@shared/interfaces/base.interfaces';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { PermissionTypeService } from '@shared/services/permission-type/permissionType.service';
import { PermissionsService } from '@shared/services/permissions/permissions.service';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-update-permission',
  templateUrl: './update-permission.component.html',
  styleUrls: ['./update-permission.component.scss'],
})
export class UpdatePermissionComponent implements OnInit {
  searchChange$ = new BehaviorSubject('');
  optionList: IOption[] = [];
  selectedOption: IOption = {
    label: '',
    value: '',
  };
  isLoading = false;
  title: string = '';
  id!: '';

  constructor(
    private permissionsService: PermissionsService,
    private permissionTypeService: PermissionTypeService,
    private notificationService: NzNotificationService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }

  onChangeTitle(e: any) {
    this.title = e.target.value;
  }

  ngOnInit(): void {
    const id: any = this.activeRoute.snapshot.paramMap.get('id');
    this.id = id;
    const optionList$: Observable<IOption[]> = this.searchChange$
      .asObservable()
      .pipe(untilDestroyed(this))
      .pipe(debounceTime(500))
      .pipe(switchMap(this.getRandomOptions));
    optionList$.subscribe((data) => {
      this.optionList = data;
      this.isLoading = false;
    });
    this.getById(id);
  }

  getRandomOptions = (name: string) =>
    this.permissionTypeService.filter({ searchTerm: name }).pipe(
      map((list: any) => {
        return list.payload.map((item: any) => {
          return {
            label: item.title,
            value: item.id,
          };
        });
      })
    );

  submitForm(): void {
    if (this.title.length === 0) {
      this.notificationService.error('Invalid Title', '');
    } else if (Object.keys(this.selectedOption).length === 0) {
      this.notificationService.error('Invalid Permission Type', '');
    } else {
      this.permissionsService
        .update(this.id, {
          permissionType: this.selectedOption?.value,
          title: this.title,
        })
        .pipe(untilDestroyed(this))
        .subscribe((res: IBaseResponse) => {
          this.notificationService.success(StaticEnum.CREATED_SUCCESS, '');
          this.router.navigate([PathsEnum.permissions]);
        });
    }
  }
  //  USER INFO
  getById(id: string) {
    this.permissionsService
      .getById(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.title = res?.payload?.title;
      });
  }
}
