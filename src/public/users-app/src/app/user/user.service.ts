import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      new User(1, 'Jose', 'Dominguez', 'jose@gmail.com'),
      new User(2, 'Pilar', 'Gonzalez', 'pilar@gmail.com')
    ];
  }
}
