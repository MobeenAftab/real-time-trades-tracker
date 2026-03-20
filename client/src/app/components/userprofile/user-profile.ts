import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  route: ActivatedRoute = inject(ActivatedRoute);
  userProfileId = -1;
  constructor() {
    console.log(this.route);
    this.userProfileId = Number(this.route.snapshot.params['id']);
  }

}
