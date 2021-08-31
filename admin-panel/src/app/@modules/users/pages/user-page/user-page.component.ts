import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ActivatedRoute } from '@angular/router';
import { PermissionsService } from '@shared/services/permissions/permissions.service';
import { UsersService } from '@shared/services/users/users.service';

@UntilDestroy()
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  userId!: string;
  user: any = {
    name: '',
    phoneNumber: '',
    email: '',
    isActive: '',
  };
  permissions!: string[];

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private permissionService: PermissionsService
  ) {}

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.userId = id;
    this.getUserById(id);
    this.getUserPermissionsById(id);
  }

  getUserById(id: string) {
    this.userService
      .getById(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.user = {
          name: res?.payload?.name,
          email: res?.payload?.email,
          isActive: res?.payload?.isActive,
          phoneNumber: res?.payload?.phoneNumber,
        };
      });
  }

  getUserPermissionsById(id: string) {
    return this.permissionService
      .userPermissions(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.permissions = res?.payload;
      });
  }
}
