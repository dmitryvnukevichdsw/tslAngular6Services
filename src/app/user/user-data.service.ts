import { Injectable } from '@angular/core';
import { User } from './User';
import { userData } from './user-data-mock';

@Injectable()
export class UserDataService {
  constructor() { }

  getUserData(): User {
    return userData;
  }
}
