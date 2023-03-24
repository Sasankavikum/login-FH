import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  loginUser(user: any) {
    this.http.post<any>('http//localhost:3001/auth/login', user);
  }
}
