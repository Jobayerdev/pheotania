import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { PathsEnum } from '../../enums/paths.enum';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../data/router-animation';

@Component({
  selector: 'app-content-layout',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss'],
  animations: [fadeInAnimation],
})
export class LayoutContentComponent implements OnInit {
  isCollapsed: any = false;
  userPhoneNumber!: string;
  readonly routePathsEnum = PathsEnum;

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    const userTokenData: any = this.authService.getUserDecodedToken();
    this.userPhoneNumber = userTokenData.phoneNumber;
  }

  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  logout(): void {
    this.authService.logout();
  }
}
