import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any

  constructor() { }

  create(user: any) {
    this.user = user
  }
}
