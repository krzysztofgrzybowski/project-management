import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

export interface User {
  id?: number;
  email?: string;
}

@Injectable()
export class UserService {

  constructor() { }

}
