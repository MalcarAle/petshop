import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { Security } from '../../../utils/security.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public user: User;

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = Security.getUser();
  }

  logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }
}
