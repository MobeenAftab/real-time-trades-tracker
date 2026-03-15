import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces/user-profile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly url = 'http://localhost:3000/';

  User() { }

  createUser() { }

  async getUser(id: number): Promise<UserProfile | undefined> {
    const data = await fetch(``);
    const user = await data.json();
    return user ?? {};
  }

  editUser() { }
  deleteUser() { }


}
