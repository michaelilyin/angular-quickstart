import { Injectable, Provider } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {
    console.info('create')
  }
}

export const AuthServiceProvider: Provider = AuthService;
